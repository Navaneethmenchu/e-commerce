import "./Nav.css";
import { GoHeart } from "react-icons/go";
import { FaTruckMoving } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import {Link} from "react-router-dom";
import { useAuth0} from "@auth0/auth0-react";


const Nav = () => {
  const { loginWithRedirect,logout, user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className="free_shipping">
        <div className="truck_icon">
            <FaTruckMoving />
        </div> 
        <p>
            FREE Shipping when shopping upto $1000
        </p>
    </div>
    <div className="main_header">
      <div className="container">
        <div className="logo">
          <img src="./img/logo.png" alt="logo" className="logo_img"/>
        </div>
        <div className="search_box">
          <input type="text" value="" placeholder="Search your product..." autoComplete="off"/>
          <button>Search</button>
        </div>
        <div className="icon">
          {
            isAuthenticated &&
            (
              <div className="user_account">
              <div className="user_icon">
                <FaRegCircleUser />
              </div>
              <p>Hello,{user.name}</p>
              </div>

            )
          }
          <div className="second_icon">
            <Link to="/" className="link" ><GoHeart /></Link>
            <Link to="/cart" className="link" ><HiOutlineShoppingBag /></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="header">
      <div className="container">
        <div className="nav">
          <ul>
            <li>
              <Link to="/" className="link">Home</Link>
            </li>
            <li>
              <Link to="/product" className="link">Product</Link>
            </li>
           <li>
              <Link to="/about" className="link">About</Link>
            </li>
            <li>
              <Link to="/contact" className="link">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="auth">
          {
            isAuthenticated ? 
            <button><CiLogout onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}/></button>
            :
            <button onClick={() => loginWithRedirect()}><CiLogin /></button>
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Nav