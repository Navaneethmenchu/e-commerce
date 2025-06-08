import './App.css'
import Nav from "./components/Nav";
import Rout from "./components/Rout";
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom';
import Productdetail from "./components/Productdetail";
import { useState } from "react";

function App() {
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState(Productdetail);
  const searchbtn = (product) => 
    {
      const change = Productdetail.filter((x) =>
        {
          return x.category === product;
        })
        setProduct(change);
      }

      const view = (product) =>
      {
        setDetail([{...product}]);
        setClose(true);
      }
  return (
    <>
    <BrowserRouter>
    <Nav searchbtn = {searchbtn}/>
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}/>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
