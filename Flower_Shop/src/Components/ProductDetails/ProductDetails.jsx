// src/Components/ProductDetails/ProductDetails.jsx
import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import placeholderCake from "../../images/slider1.jpg";

// 👇 Load all .jpg files dynamically from src/images/
const images = require.context("../../images", false, /\.jpg$/);

export const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [value, setValue] = useState("1-pound"); // selected size
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // delivery related state
  const [deliveryMethod, setDeliveryMethod] = useState("home"); // "home" | "pickup"
  const [address, setAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  const API_URL_RAW = process.env.REACT_APP_API_URL || "http://localhost:5001";
  const API_URL = API_URL_RAW.replace(/\/$/, "");

  // ✅ Get local image from src/images/{id}.jpg
  const getImageUrl = (cakeId) => {
    try {
      return images(`./${cakeId}.jpg`);
    } catch (e) {
      console.warn(`No local image found for cake id=${cakeId}, using fallback.`);
      return placeholderCake;
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await axios.get(`${API_URL}/cake/homepage/${id}`);
        console.log("ProductDetails (cake) data:", res.data);

        if (!res.data || !res.data.name) {
          setError("Cake not found.");
          setData(null);
        } else {
          setData(res.data);
        }
      } catch (err) {
        console.error("Error fetching cake details:", err);
        setError("Failed to load cake details.");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getData();
    }
  }, [id, API_URL]);

  const handleSizeChange = (event) => {
    setValue(event.target.value);
  };

  // 🔢 price multiplier based on selected pound
  const getMultiplier = () => {
    if (value === "2-pound") return 2;
    if (value === "3-pound") return 3;
    return 1; // default 1-pound
  };

  const basePrice = Number(data?.price) || 0;      // price per pound
  const multiplier = getMultiplier();
  const finalPrice = basePrice * multiplier;       // total price based on size

  const handleCheckout = () => {
    // Simple validation
    if (!deliveryDate || !deliveryTime) {
      alert("Please select delivery date and time.");
      return;
    }

    if (deliveryMethod === "home" && !address.trim()) {
      alert("Please enter delivery address.");
      return;
    }

    // You can pass data to payment page
    navigate("/payment", {
      state: {
        productId: data.id,
        productName: data.name,
        basePrice,
        multiplier,
        price: finalPrice,          // ✅ send calculated price
        size: value,
        deliveryMethod,
        address: deliveryMethod === "home" ? address : null,
        deliveryDate,
        deliveryTime,
      },
    });
  };

  if (loading) {
    return <div className="product-container">Loading cake details...</div>;
  }

  if (error) {
    return <div className="product-container">{error}</div>;
  }

  if (!data) {
    return <div className="product-container">No data found.</div>;
  }

  return (
    <div className="product-container">
      <h1>{data.name}</h1>

      {/* 💰 Dynamic price */}
      <h4>Price: ৳ {finalPrice}</h4>
      <p style={{ marginTop: "-8px", color: "#777" }}>
        Base price (per pound): ৳ {basePrice}
      </p>

      <hr style={{ display: "flex", width: "90%" }} />

      <div style={{ display: "flex", width: "90%", gap: "24px" }}>
        {/* ✅ Uses local image with fallback */}
        <img
          src={getImageUrl(data.id)}
          alt={data.name || "Cake"}
          style={{ margin: "auto", width: "450px", borderRadius: "10px" }}
        />

        <div style={{ margin: "auto", width: "50%" }}>
          {/* Size selection */}
          <FormControl component="fieldset" style={{ marginBottom: "16px" }}>
            <FormLabel id="size-group">Select Size</FormLabel>
            <RadioGroup
              aria-labelledby="size-group"
              name="size-radio-group"
              value={value}
              onChange={handleSizeChange}
            >
              <FormControlLabel
                value="1-pound"
                control={<Radio />}
                label="1 Pound"
              />
              <FormControlLabel
                value="2-pound"
                control={<Radio />}
                label="2 Pound"
              />
              <FormControlLabel
                value="3-pound"
                control={<Radio />}
                label="3 Pound"
              />
            </RadioGroup>
          </FormControl>

          <hr style={{ width: "60%" }} />

          {/* Delivery method (mutually exclusive) */}
          <FormControl component="fieldset" style={{ marginTop: "16px" }}>
            <FormLabel>Delivery Method</FormLabel>
            <RadioGroup
              name="delivery-method"
              value={deliveryMethod}
              onChange={(e) => setDeliveryMethod(e.target.value)}
            >
              <FormControlLabel
                value="home"
                control={<Radio />}
                label="Home Delivery"
              />
              <FormControlLabel
                value="pickup"
                control={<Radio />}
                label="Pickup from Shop"
              />
            </RadioGroup>
          </FormControl>

          {/* Address - only for home delivery */}
          {deliveryMethod === "home" && (
            <div style={{ width: "60%", margin: "16px 0" }}>
              <label style={{ display: "block", marginBottom: "4px" }}>
                Delivery Address
              </label>
              <textarea
                placeholder="House / Road / Area / City / Zip Code"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{
                  width: "100%",
                  minHeight: "70px",
                  padding: "8px",
                  boxSizing: "border-box",
                  resize: "vertical",
                }}
              />
            </div>
          )}

          {/* Date & time */}
          <div style={{ width: "60%", margin: "16px 0" }}>
            <h4>Delivery Date</h4>
            <input
              type="date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              style={{
                width: "100%",
                marginBottom: "10px",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />

            <h4>Delivery Time</h4>
            <input
              type="time"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
              style={{
                width: "100%",
                marginTop: "4px",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Checkout */}
          <div style={{ width: "60%", margin: "20px auto 0" }}>
            <Stack direction="row" spacing={2} style={{ marginTop: "10px" }}>
              <Button variant="contained" onClick={handleCheckout}>
                Checkout
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};
