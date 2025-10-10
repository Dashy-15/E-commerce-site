import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "../UI/ProductList";
import About from "../UI/About";
import Home from "../UI/Home";

function Routing() {
    return (
        <>
          <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/store" element={<ProductList/>}/>
            </Routes>
          </Router>
        </>
    );
}

export default Routing;