import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { catOption } from '../options';

const ViewCat = () => {
    const [item, setItem] = useState({
        name: '',
        origin: '',
        weight: '',
        hairless: '',
        wikipedia_url: '',
        image: { url: '' },
    });
    // const [item,setItem]=useState(null)
    const { id } = useParams();
    console.log("Cat ID Dsplay", id);
    useEffect(() => {
        loadCat();
    }, []);

    const loadCat = async () => {
        const resp = await axios.get(`https://api.thecatapi.com/v1/breeds/${id}`);
        setItem(resp.data);
        console.log('print View data', resp.data);
    };

   

    return (
        <div className="container py-4">
            <Link to="/" className="btn btn-primary">
                Back to home
            </Link>
            <h1 className="display-4">cat Id: {id}</h1>
            <hr />
            <div className="d-flex justify-content-between">
                <ul className="list-group w-50">
                    <li className="list-group-item">
                        <img
                            src={item.image && item.image.url ? item.image.url : 'fallback_image_url'}
                            style={{ width: '100px', height: '130px' }}
                            alt="Not item"
                            className="img-fluid"
                        />
                    </li>
                </ul>

                <ul className="list-group w-50">
                    <li className="list-group-item">Name: {item.name}</li>
                    <li className="list-group-item">Origin: {item.origin}</li>
                    <li className="list-group-item">Weight: {item.weight && item.weight.metric}</li>
                    <li className="list-group-item">Hairless: {item.hairless}</li>
                    <li className="list-group-item">
                        Website: <Link to={item.wikipedia_url} className="btn btn-primary">
                            {item.wikipedia_url}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ViewCat;
