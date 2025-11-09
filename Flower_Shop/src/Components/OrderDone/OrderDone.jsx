import React from "react";
import "../Payment/PaymentPage.css";

export const OrderPlaced = () => {
  return (
    <div className="order-success">
      <img
        src="https://dealsnaijashop.com/wp-content/uploads/2020/09/icon_confirmation-1.gif"
        alt="Order confirmed"
      />
      <h2>🎉 Order Confirmed!</h2>
      <p>Your delicious cake is being prepared with love and care 🍰</p>
      <p>We’ll notify you once it’s ready for pickup or delivery.</p>
      <button
        className="order-btn"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </button>
    </div>
  );
};
