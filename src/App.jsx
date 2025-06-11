import './App.css'
import Nav from "./components/Nav";
import Rout from "./components/Rout";
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom';
import Productdetail from "./components/Productdetail";

import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState(Productdetail);
  const [wishlist, setWishlist] = useState([]);
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

      const addtocart = (product) =>
      {
        const exist = cart.find((x) =>
      {
        return x.id === product.id
      })
        if(exist)
        {
          alert("This Product is already in the cart")
        }
        else
        {
          setCart([...cart,{...product, qty:1}]);
          alert("Product added to cart")
        }

      }

      const addtoWishlist = (product) =>
      {
        const exist = wishlist.find((x) =>
      {
        return x.id === product.id
      })
        if(exist)
        {
          alert("This Product is already in the Wishlist")
        }
        else
        {
          setWishlist([...wishlist,{...product}]);
          alert("Product added to Wishlist")
        }

      }

  return (
    <>
    <BrowserRouter>
    <Nav searchbtn = {searchbtn}/>
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart} wishlist={wishlist} setWishlist={setWishlist} addtoWishlist={addtoWishlist}/>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
