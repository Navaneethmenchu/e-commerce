import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="about">
          <div className="logo">
            <img src="./img/logo.png" alt="logo" />
          </div>
          <div className="detail">
            <p>Products with High quality and Low Pricing</p>
            <div className="icons">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><RiInstagramFill /></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><IoLogoYoutube /></a></li>
            </div>
          </div>
        </div>
        <div className="account">
          <h3>My Account</h3>
          <ul>
            <li>Account</li>
            <li>Order</li>
            <li>Cart</li>
            <li>Shipping</li>
            <li>Return</li>
          </ul>
        </div>
        <div className="pages">
          <h3>Pages</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
