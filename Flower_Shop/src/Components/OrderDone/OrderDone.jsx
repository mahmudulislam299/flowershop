import React from "react";
import { useNavigate } from "react-router-dom";
import "../Payment/PaymentPage.css";

export const OrderPlaced = () => {
  const navigate = useNavigate();

  return (
    <div className="order-success">
      <div className="order-card enhanced-order-card">
        
        {/* Success Animation */}
        <img
          className="success-gif"
          src="https://cdn.dribbble.com/users/1784673/screenshots/5614159/media/55f4b76da9d00e6f66a701d89f5cb918.gif"
          alt="Order confirmed"
        />

        <h2 className="order-title">🎉 Order Successfully Placed!</h2>

        <p className="order-text">
          Your cake is being freshly prepared with love, care, and perfection. 🍰💗
        </p>

        <p className="order-text">
          You will receive an update once it’s ready for <strong>pickup or delivery</strong>.
        </p>

        <button className="order-btn enhanced-order-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>

        <p className="order-subtext">
          Thank you for choosing <strong>Shahbag Cake Shop</strong>.  
          We’re honoured to be part of your celebration! 🎂✨
        </p>
      </div>
    </div>
  );
};
