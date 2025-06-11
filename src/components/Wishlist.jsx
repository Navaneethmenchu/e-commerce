import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Wishlist.css";

const Wishlist = ({ wishlist, setWishlist,cart,setCart }) => {
  const removeFromWishlist = (product) => {
    setWishlist(wishlist.filter((x) => x.id !== product.id));
  };

  const moveToCart = (product) => {
    const inCart = cart.find((x) => x.id === product.id);
    if (!inCart) {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    removeFromWishlist(product);
  };

  return (
    <>
      <div className="wishlist_container">
        {wishlist.length === 0 && 
          <div className="empty_wishlist">
            <h2 className="empty">Your Wish List is Empty</h2>
            <Link to="/product" className="empty_link">
              Browse Products
            </Link>
          </div>
        }
        <div className="wishlist">
          {wishlist.map((elm) => {
            return (
              <div className="wishlist_item" key={elm.id}>
                <div className="img_box">
                  <img src={elm.image} alt={elm.title} />
                </div>
                <div className="detail">
                  <div className="info">
                    <h4>{elm.category}</h4>
                    <h3>{elm.title}</h3>
                    <p>${elm.price}</p>
                    <button to="/cart" className="move_to_cart" onClick={() => moveToCart(elm)}>
                      Move to Cart
                    </button>
                  </div>
                  <div className="close">
                    <button onClick={() => removeFromWishlist(elm)}>
                      <IoIosCloseCircleOutline />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
