import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import { LuCirclePercent } from "react-icons/lu";
import { ImHeadphones } from "react-icons/im";
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import HomeProduct from "./HomeProduct";
import "./Home.css"
import { useState } from "react";

const Home = () => {
  const [homeProduct, setHomeProduct] = useState(HomeProduct)
  return (
    <>
    <div className="top_banner">
      <div className="container">
        <div className="detail">
          <h2>The Best Note Book Collection 2025</h2>
          <Link to="/product" className="link">Shop Now <BsArrowRight /></Link>
        </div>
        <div className="img">
          <img src="./img/slider.png" alt="sliderimg" height="400px" width="400px"/>
        </div>
      </div>
    </div>
    <div className="product_type"> 
      <div className="container_img">
        <div className="box">
          <div className="img_box"> 
            <img src="./img/mobile.png" alt="mobile image" />
          </div>
          <div className="detail">
            <p>23 products</p>
          </div>
        </div>
        <div className="box">
          <div className="img_box"> 
            <img src="./img/smartwatch.png" alt="smartwatch image" />
          </div>
          <div className="detail">
            <p>19 products</p>
          </div>
        </div>
        <div className="box">
          <div className="img_box"> 
            <img src="./img/headphone.png" alt="headphones image" />
          </div>
          <div className="detail">
            <p>15 products</p>
          </div>
        </div>
        <div className="box">
          <div className="img_box"> 
            <img src="./img/laptop.png" alt="laptop image" />
          </div>
          <div className="detail">
            <p>23 products</p>
          </div>
        </div>
      </div>
    </div>
    <div className="about">
      <div className="container">
        <div className="box">
          <div className="icon"> 
            <FiTruck />
          </div>
          <div className="detail">
            <h3>Free Shipping</h3>
            <p>Order above $1000</p>
          </div>
        </div>
        <div className="box">
          <div className="icon"> 
            <BiDollar />
          </div>
          <div className="detail">
            <h3>Refund & Return</h3>
            <p>Money Back Gurantee</p>
          </div>
        </div>
        <div className="box">
          <div className="icon"> 
            <LuCirclePercent />
          </div>
          <div className="detail">
            <h3>Members Discount</h3>
            <p>On Every Order</p>
          </div>
        </div>
        <div className="box">
          <div className="icon"> 
            <ImHeadphones />
          </div>
          <div className="detail">
            <h3>Customer Support</h3>
            <p>24/7 Customer Service</p>
          </div>
        </div>
      </div>
    </div>
    <div className="product">
      <h2>Top Products</h2>
      <div className="container">
        {
          homeProduct.map((elm) =>
          {
            return(
              <div className="box" key={elm.id}>
                <div className="img_box">
                  <img src={elm.image} alt={elm.title} />
                  <div className="icons">
                    <li><IoCartOutline /></li>
                    <li><IoEyeOutline /></li>
                    <li><IoIosHeartEmpty /></li>
                  </div>
                </div>
                <div className="details">
                  <p>{elm.category}</p>
                  <h3>{elm.title}</h3>
                  <h4>{elm.price}</h4>
                </div>
              </div>
            )
          }
          
          )
        }
      </div>
    </div>
    <div className="banner">
      <div className="container">
        <div className="detail">
          <h4>LATEST TECHNOLOGY ADDED</h4>
          <h3>Apple ipad 10.2 9th gen 2023</h3>
          <p><BiDollar /> 999</p>
          <Link to="/product" className="link">Shop Now <BsArrowRight /></Link>
        </div>
        <div className="img-box">
          <img src="./img/slider.png" alt="slider image" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home