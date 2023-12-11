import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import ViewCat from "./Operation/ViewCat";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/operation/:id" element={<ViewCat />}></Route>
          <Route path="/*" element={<NotFound />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
