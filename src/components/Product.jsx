import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import Productdetail from "./Productdetail";
import "./Product.css";

const Product = () => {
  return (
    <>
    <div className="products">
        <h2># PRODUCTS</h2>
        <p>Home .Products</p>
        <div className="container">
            <div className="filter">
                <div className="categories">
                    <h3>CATEGORIES</h3>
                    <ul>
                        <li>Mobile</li>
                        <li>SmartWatch</li>
                        <li>HeadPhones</li>
                        <li>Laptop</li>
                    </ul>
                </div>
            </div>
            <div className="productbox">
              <div className="productcontainer">
                {
                  Productdetail.map((elm) =>
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
        </div>
    </div>
    </>
  )
}

export default Product