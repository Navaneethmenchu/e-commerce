import { IoIosCloseCircleOutline } from "react-icons/io";
import {Link} from "react-router-dom";
import "./Cart.css"

const Cart = ({cart,setCart}) => {
    const incqty = (product) =>
      {
        const exist = cart.find((x) =>
      {
        return x.id === product.id
      })
        setCart(cart.map((elm) =>
        {
            return elm.id === product.id ? {...exist, qty:exist.qty + 1} : elm
        }))
      }

      const decqty = (product) =>
      {
        const exist = cart.find((x) =>
      {
        return x.id === product.id
      })
      if(exist.qty > 1){
        setCart(cart.map((elm) =>
        {
            return elm.id === product.id ? {...exist, qty:exist.qty - 1} : elm
        }))
      }
    }

      const removeproduct = (product) =>
      {
        const exist = cart.find((x) =>
      {
        return x.id === product.id
      })
      if(exist.qty > 0)
      {
        setCart(cart.filter((x) => {
            return x.id != product.id
        }))
      }
      }

      const totalprice = cart.reduce((price,item) => price + item.qty * item.price, 0)

  return (
    <>
    <div className='cart_container'>
        {cart.length === 0 && 
        <div className="empty_cart">
        <h2 className="empty">Cart is Empty</h2>
        <Link to='/product' className="empty_link"> Shop Now</Link>
        </div>
        }
        <div className='cart'>
            {
                cart.map((elm) =>
                    {
                        return(
                            <div className="cart_item" key={elm.id}>
                              <div className="img_box">
                                <img src={elm.image} alt={elm.title} />
                              </div>
                              <div className="detail">
                                <div className="info">
                                <h4>{elm.category}</h4>
                                <h3>{elm.title}</h3>
                                <p>${elm.price}</p>
                                <div className="qty">
                                    <button className="inc_qty" onClick={() => incqty(elm)}>+</button>
                                    <input type="text" value={elm.qty} />
                                    <button className="dec_qty" onClick={() => decqty(elm)}>-</button>
                                </div>
                                <h4 className="subtotal">sub total: ${elm.price * elm.qty}</h4>
                                </div>
                                <div className="close">
                                <button onClick={() => removeproduct(elm)}><IoIosCloseCircleOutline/></button>
                                </div>
                              </div>
                            </div>
                
                        )
                    })
                    }
        </div>
        {
            cart.length > 0 && 
            <>
            <h2 className="total_price">total : ${totalprice}</h2>
            <button className="checkout">Checkout</button>
            </>
        }
    </div>
    </>
  )
}

export default Cart