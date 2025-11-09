import React from "react";
import { useNavigate } from "react-router-dom";
import "../Payment/PaymentPage.css";

export const OrderPlaced = () => {
  const navigate = useNavigate();

  return (
    <div className="order-success">
      <div className="order-card">
        <img
          src="https://dealsnaijashop.com/wp-content/uploads/2020/09/icon_confirmation-1.gif"
          alt="Order confirmed"
        />
        <h2>🎉 Order Confirmed!</h2>
        <p>Your delicious cake is being prepared with love and care 🍰</p>
        <p>We’ll notify you once it’s ready for pickup or delivery.</p>

        <button className="order-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>

        <p className="order-subtext">
          Thank you for choosing <strong>Shahbag Cake Shop</strong>.
        </p>
      </div>
    </div>
  );
};
