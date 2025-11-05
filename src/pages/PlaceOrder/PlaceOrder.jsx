import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'   // ✅ Added navigate import

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  const navigate = useNavigate();  // ✅ Initialize navigation

  const handleProceedPayment = (e) => {
    e.preventDefault();
    navigate('/paytm');  // ✅ Redirect to Paytm payment page
  };

  return (
    <form className="place-order">
      {/* LEFT SIDE — DELIVERY INFO */}
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" className="text" placeholder="First name" />
          <input type="text" className="text" placeholder="Last name" />
        </div>

        <input type="email" className="text" placeholder="Email" />
        <input type="text" className="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" className="text" placeholder="City" />
          <input type="text" className="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" className="text" placeholder="Zip code" />
          <input type="text" className="text" placeholder="Country" />
        </div>

        <input type="text" className="text" placeholder="Phone" />
      </div>

      {/* RIGHT SIDE — CART SUMMARY */}
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>

          {/* ✅ Updated Button */}
          <button onClick={handleProceedPayment} className="proceed-btn">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
