import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="about">
                <div className="logo">
                    <img src="./img/logo.png" alt="logo" />
                </div>
                <div className="detail">
                    <p>Products with High quality and Low Pricing</p>
                    <div className="icons">
                        <li><FaFacebookF /></li>
                        <li><RiInstagramFill /></li>
                        <li><FaTwitter /></li>
                        <li><IoLogoYoutube /></li>
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer