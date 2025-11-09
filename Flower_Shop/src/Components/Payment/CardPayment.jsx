import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PaymentPage.css";

export const CardPayment = () => {
  const [data, setData] = useState({
    cardNum: "",
    expiryDate: "",
    enterCvv: "",
    nameOnCard: "",
    tnc: false,
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setData((prev) => ({ ...prev, [id]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/cardpayment", data)
      .then(() => {
        alert("🎉 Payment successful! Your cake is being prepared 🍰");
      })
      .catch((err) => console.error(err));
  };

  const cart_total = JSON.parse(localStorage.getItem("cart_total")) || 1200;

  return (
    <div className="payment-container">
      <div className="payment-left">
        <div className="payment-header">
          <h3>🎂 Shahbag Cake Shop</h3>
        </div>
        <div className="payment-summary">
          <p className="payment-title">Enter your card details</p>
          <p>Total Payable Amount: ৳{cart_total}</p>
          <p className="payment-note">Transaction ID: 100110125</p>
        </div>
      </div>

      <div className="payment-right">
        <div className="payment-options-header">
          <div>Enter New Card</div>
          <div>
            <select id="language" className="lang-select">
              <option value="English">English</option>
              <option value="Bengali">বাংলা</option>
            </select>
          </div>
        </div>

        <form className="card-form" onSubmit={handleSubmit}>
          <label>Card Number</label>
          <input
            id="cardNum"
            value={data.cardNum}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            maxLength="16"
            required
          />

          <div className="form-row">
            <div>
              <label>Expiry (MM/YY)</label>
              <input
                id="expiryDate"
                value={data.expiryDate}
                onChange={handleInputChange}
                placeholder="05/28"
                maxLength="5"
                required
              />
            </div>
            <div>
              <label>CVV</label>
              <input
                id="enterCvv"
                value={data.enterCvv}
                onChange={handleInputChange}
                placeholder="123"
                maxLength="3"
                required
              />
            </div>
          </div>

          <label>Name on Card</label>
          <input
            id="nameOnCard"
            value={data.nameOnCard}
            onChange={handleInputChange}
            placeholder="e.g. Mahmudul Hasan"
            required
          />

          <div className="form-checkbox">
            <input
              id="tnc"
              type="checkbox"
              checked={data.tnc}
              onChange={handleInputChange}
            />
            <span>Save this card securely for faster checkout</span>
          </div>

          <Link to="/orderdone">
            <button type="submit" className="pay-btn">
              PAY ৳{cart_total}
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
