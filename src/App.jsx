import "./App.css";
import SiteNav from "./components/SiteNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs ";
import ProductDetails from "./components/ProductDetails";
import Register from "./components/Register";
import Cart from "./components/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <SiteNav></SiteNav>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Contactus" element={<ContactUs></ContactUs>}></Route>
          <Route
            path="/Productdetails/:title/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="/Register" element={<Register></Register>}></Route>
          <Route path="/Cart" element={<Cart></Cart>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
