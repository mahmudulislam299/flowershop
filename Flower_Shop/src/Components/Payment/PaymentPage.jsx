// src/Components/PaymentPage/PaymentPage.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./PaymentPage.css";

export const PaymentPage = () => {
  const location = useLocation();
  const stateOrder = location.state || null;
  const storedOrder =
    JSON.parse(localStorage.getItem("order_info") || "null") || null;

  const order = stateOrder || storedOrder || {};

  const cart_total =
    order.price ||
    JSON.parse(localStorage.getItem("cart_total") || "0") ||
    1200;

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="payment-left">
          <div className="payment-header">
            <h3>🎂 Shahbag Cake Shop</h3>
            <p>Choose your preferred payment method</p>
          </div>

          {/* Order info (if available) */}
          {(order.productName || order.deliveryDate || order.deliveryTime) && (
            <div className="order-info">
              {order.productName && (
                <p>
                  <strong>Product:</strong> {order.productName}
                </p>
              )}
              {order.size && (
                <p>
                  <strong>Size:</strong> {order.size.replace("-", " ")}
                </p>
              )}
              {order.deliveryMethod && (
                <p>
                  <strong>Delivery:</strong>{" "}
                  {order.deliveryMethod === "home"
                    ? "Home Delivery"
                    : "Pickup from Shop"}
                </p>
              )}
              {order.deliveryDate && (
                <p>
                  <strong>Date:</strong> {order.deliveryDate}
                </p>
              )}
              {order.deliveryTime && (
                <p>
                  <strong>Time:</strong> {order.deliveryTime}
                </p>
              )}
              {order.deliveryMethod === "home" && order.address && (
                <p>
                  <strong>Address:</strong> {order.address}
                </p>
              )}
            </div>
          )}

          <div className="payment-summary">
            <p className="payment-title">Checkout Summary</p>
            <p className="payment-amount">Total Payable Amount</p>
            <p className="payment-amount-value">৳{cart_total}</p>
            <p className="payment-note">
              Secure checkout — 100% safe payment (Demo)
            </p>
          </div>
          <ul className="payment-benefits">
            <li>✔ Same-day delivery available in Dhaka</li>
            <li>✔ Real-time order updates</li>
            <li>✔ Freshly baked cakes made to order</li>
          </ul>
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
            <Link to="/card-payment" className="pay-option">
              <h3>💳 Cards (Credit / Debit)</h3>
              <p>Visa, Mastercard</p>
            </Link>

            <div className="pay-option disabled">
              <h3>🏦 Net Banking</h3>
              <p>All Bangladeshi Banks (Coming soon)</p>
            </div>

            <Link to="/upi-payment" className="pay-option">
              <h3>💠 Mobile Banking</h3>
              <p>Pay with bkash QR, Nagad</p>
            </Link>

            <div className="pay-option">
              <h3>💵 Cash on Delivery</h3>
              <p>Available in Dhaka City only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
