import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useAuth0} from "@auth0/auth0-react";
import Productdetail from "./Productdetail";
import "./Product.css";

const Product = ({product, setProduct, detail, view, close, setClose,addtocart,addtoWishlist}) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const filterproduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.category === product;
    })
    setProduct(update)
  }

  const allproducts = () => {
    setProduct(Productdetail);
  }


  return (
    <>
    {
      close ?
      <div className="product-detail">
      <div className="container">
        <button onClick={() => setClose(false)} className="closebtn"><IoIosCloseCircleOutline /></button>
        {
          detail.map((elm) => 
            {
              return(
                <div className="productbox">
                  <div className="img-box">
                    <img src={elm.image} alt={elm.title} />
                  </div>
                  <div className="detail">
                    <h4>{elm.category}</h4>
                    <h2>{elm.title}</h2>
                    <h3>${elm.price}</h3>
                    <button>Add to cart</button>
                  </div>
                </div>
                
              )
            

          })
        }

      </div>
    </div> : null
    }
    <div className="products">
        <h2># PRODUCTS</h2>
        <p>Home .Products</p>
        <div className="container">
            <div className="filter">
                <div className="categories">
                    <h3>CATEGORIES</h3>
                    <ul>
                        <li onClick={() => allproducts()}>All</li>
                        <li onClick={() => filterproduct("Mobile")}>Mobile</li>
                        <li onClick={() => filterproduct("SmartWatch")}>SmartWatch</li>
                        <li onClick={() => filterproduct("HeadPhones")}>HeadPhones</li>
                        <li onClick={() => filterproduct("Laptop")}>Laptop</li>
                    </ul>
                </div>
            </div>
            <div className="productbox">
              <div className="productcontainer">
                {
                  product.map((elm) =>
                    {
                      return(
                        <div className="box" key={elm.id}>
                          <div className="img_box">
                            <img src={elm.image} alt={elm.title} />
                            <div className="icons">
                              {
                                isAuthenticated ?
                                <li onClick={() => addtocart(elm)}><IoCartOutline /></li>:
                                <li onClick={() => loginWithRedirect()}><IoCartOutline /></li>
                              }
                              <li onClick={() => view(elm)}><IoEyeOutline /></li>
                              {<li onClick={() => addtoWishlist(elm)}><IoIosHeartEmpty /></li>}
                            </div>
                          </div>
                          <div className="details">
                            <p>{elm.category}</p>
                            <h3>{elm.title}</h3>
                            <h4>${elm.price}</h4>
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