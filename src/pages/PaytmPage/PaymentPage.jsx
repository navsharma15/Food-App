import React from 'react';
import './PaytmPage.css';
import qr from "../../assets/Paytm.jpg"; // ← your QR code path

const PaytmPage = () => {
  const handlePayment = () => {
    alert('✅ Your order has been placed successfully!');
  };

  return (
    <div className="paytm-page">
      <h2>Scan to Pay</h2>
      <p>Use any UPI app (Paytm, Google Pay, PhonePe, etc.)</p>

      {/* Your actual QR code image */}
      <img 
        src={qr} 
        alt="Payment QR" 
        className="qr-image"
      />

      <button className="confirm-btn" onClick={handlePayment}>
        Confirm Payment
      </button>
    </div>
  );
};

export default PaytmPage;
