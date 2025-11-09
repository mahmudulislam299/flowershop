import React from "react";
import "./PaymentPage.css";

export const PaymentPage = () => {
  return (
    <div className="payment-container">
      <div className="payment-left">
        <div className="payment-header">
          <h3>🎂 Shahbag Cake Shop</h3>
        </div>
        <div className="payment-summary">
          <p className="payment-title">Choose a payment option</p>
          <p>Total Payable Amount: ৳1200</p>
          <p className="payment-note">Secure checkout — 100% safe payment</p>
        </div>
      </div>

      <div className="payment-right">
        <div className="payment-options-header">
          <div>PAYMENT OPTIONS</div>
          <div>
            <select id="language" className="lang-select">
              <option value="English">English</option>
              <option value="Bengali">বাংলা</option>
            </select>
          </div>
        </div>

        <div className="payment-options">
          <a href="/card-payment" className="pay-option">
            <h3>💳 Cards (Credit/Debit)</h3>
            <p>Visa, Mastercard, Amex</p>
          </a>

          <div className="pay-option">
            <h3>🏦 Net Banking</h3>
            <p>All Bangladeshi Banks</p>
          </div>

          <div className="pay-option">
            <h3>📱 Mobile Wallets</h3>
            <p>bkash, Nagad, Rocket, Upay</p>
          </div>

          <a href="/upi-payment" className="pay-option">
            <h3>💠 UPI / QR</h3>
            <p>Pay with GPay, PhonePe, or bkash QR</p>
          </a>

          <div className="pay-option">
            <h3>💵 Cash on Delivery</h3>
            <p>Available in Dhaka City only</p>
          </div>
        </div>
      </div>
    </div>
  );
};
