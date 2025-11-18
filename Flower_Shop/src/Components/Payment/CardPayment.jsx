// src/Components/PaymentPage/CardPayment.jsx
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentPage.css";

export const CardPayment = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    cardNum: "",
    expiryDate: "",
    enterCvv: "",
    nameOnCard: "",
    tnc: false,
  });

  const cart_total =
    JSON.parse(localStorage.getItem("cart_total") || "0") || 1200;

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.tnc) {
      alert("Please agree to save card or uncheck if not needed.");
      // or you can remove this check if you want it optional
    }

    axios
      .post("http://localhost:8080/cardpayment", data)
      .then(() => {
        alert("🎉 Payment successful! Your cake is being prepared 🍰");
        navigate("/orderdone");
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong while processing payment.");
      });
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="payment-left">
          <div className="payment-header">
            <h3>🎂 Aishajaa's Cake Shop</h3>
            <p>Secure card payment powered by Shahbag Cakes</p>
          </div>
          <div className="payment-summary">
            <p className="payment-title">Enter your card details</p>
            <p className="payment-amount">Total Payable Amount</p>
            <p className="payment-amount-value">৳{cart_total}</p>
            <p className="payment-note">Transaction ID: 100110125 (Demo)</p>
          </div>
          <ul className="payment-benefits">
            <li>🔒 256-bit SSL secured payment</li>
            <li>⚡ Instant confirmation</li>
            <li>🎁 Priority order processing</li>
          </ul>
        </div>

        <div className="payment-right">
          <div className="payment-options-header">
            <div>Pay with Card</div>
            <div>
              <select id="language" className="lang-select">
                <option value="English">English</option>
                <option value="Bengali">বাংলা</option>
              </select>
            </div>
          </div>

          <form className="card-form" onSubmit={handleSubmit}>
            <label className="field-label">Card Number</label>
            <input
              id="cardNum"
              value={data.cardNum}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              maxLength="16"
              inputMode="numeric"
              required
            />

            <div className="form-row">
              <div className="form-group">
                <label className="field-label">Expiry (MM/YY)</label>
                <input
                  id="expiryDate"
                  value={data.expiryDate}
                  onChange={handleInputChange}
                  placeholder="05/28"
                  maxLength="5"
                  required
                />
              </div>
              <div className="form-group">
                <label className="field-label">CVV</label>
                <input
                  id="enterCvv"
                  value={data.enterCvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength="3"
                  inputMode="numeric"
                  required
                />
              </div>
            </div>

            <label className="field-label">Name on Card</label>
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

            <button type="submit" className="pay-btn">
              PAY ৳{cart_total}
            </button>
            <p className="secure-text">
              🔐 Your card details are never stored in plain text.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
