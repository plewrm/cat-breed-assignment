import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { catOption } from "../options";
const Home = () => {
  const [cat, setCat] = useState("");

  useEffect(() => {
    loadCat();
  }, []);

  const loadCat = async () => {
    const result = await axios.get(`https://api.thecatapi.com/v1/breeds`,catOption);
    setCat(result.data);
    console.log("print data",result.data);
  };

 

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Breed Name</th>
              <th>Origin</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
            {cat &&
              cat?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.origin}</td>
                  <td> <img
                            src={item.image && item.image.url}
                            style={{ width: '100px', height: '130px' }}
                            alt="Not Cat"
                            className="img-fluid"
                        /></td>

                  <td>
                    <Link
                      to={`/operation/${item.id}`}
                      className="btn btn-primary"
                    >
                      View
                    </Link>
                    &nbsp;
                  
                  </td>
                </tr>
              ))}
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
