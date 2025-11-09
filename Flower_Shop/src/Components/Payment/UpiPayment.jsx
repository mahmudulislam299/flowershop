import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentPage.css";

export const UpiPayment = () => {
  const [method, setMethod] = useState("bkash");
  const [upiId, setUpiId] = useState("");
  const navigate = useNavigate();

  const cart_total = JSON.parse(localStorage.getItem("cart_total")) || 1200;

  const handlePay = (e) => {
    e.preventDefault();
    if (!upiId.trim()) {
      alert("Please enter your mobile / UPI ID.");
      return;
    }
    alert(`Payment request sent via ${method}. (Demo) 🎂`);
    navigate("/orderdone");
  };

  return (
    <div className="payment-container">
      <div className="payment-left">
        <div className="payment-header">
          <h3>🎂 Shahbag Cake Shop</h3>
        </div>
        <div className="payment-summary">
          <p className="payment-title">Pay with Mobile Wallet / UPI</p>
          <p>Total Payable Amount: ৳{cart_total}</p>
          <p className="payment-note">
            Use bkash, Nagad, Rocket, Upay or any supported UPI app.
          </p>
        </div>
      </div>

      <div className="payment-right">
        <div className="payment-options-header">
          <div>Select Wallet / UPI</div>
          <div>
            <select id="language" className="lang-select">
              <option value="English">English</option>
              <option value="Bengali">বাংলা</option>
            </select>
          </div>
        </div>

        <div className="upi-container">
          <div className="upi-methods">
            <label>
              <input
                type="radio"
                name="upiMethod"
                value="bkash"
                checked={method === "bkash"}
                onChange={(e) => setMethod(e.target.value)}
              />
              bkash
            </label>
            <label>
              <input
                type="radio"
                name="upiMethod"
                value="nagad"
                checked={method === "nagad"}
                onChange={(e) => setMethod(e.target.value)}
              />
              Nagad
            </label>
            <label>
              <input
                type="radio"
                name="upiMethod"
                value="rocket"
                checked={method === "rocket"}
                onChange={(e) => setMethod(e.target.value)}
              />
              Rocket
            </label>
            <label>
              <input
                type="radio"
                name="upiMethod"
                value="upay"
                checked={method === "upay"}
                onChange={(e) => setMethod(e.target.value)}
              />
              Upay
            </label>
          </div>

          <div className="upi-details">
            <div className="upi-qr">
              <div className="upi-qr-box">
                {/* Just a placeholder box – in real app you’d render QR here */}
                <span>QR CODE</span>
              </div>
              <p className="upi-qr-text">
                Scan this QR with your {method.toUpperCase()} app to pay.
              </p>
            </div>

            <form className="upi-form" onSubmit={handlePay}>
              <label>
                Mobile / UPI ID
                <input
                  type="text"
                  placeholder={
                    method === "bkash"
                      ? "01XXXXXXXXX"
                      : "yourname@upi / mobile number"
                  }
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
              </label>
              <p className="upi-hint">
                After completing the payment in your app, click the button below.
              </p>
              <button type="submit" className="pay-btn">
                I have paid ৳{cart_total}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
