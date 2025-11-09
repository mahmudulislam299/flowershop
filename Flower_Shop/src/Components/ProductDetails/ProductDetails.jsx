// src/Components/ProductDetails/ProductDetails.jsx
import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import placeholderCake from "../../images/slider1.jpg";

export const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [value, setValue] = useState("1-pound");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL_RAW = process.env.REACT_APP_API_URL || "http://localhost:5001";
  const API_URL = API_URL_RAW.replace(/\/$/, "");

  const getImageUrl = (image) => {
    if (!image) return placeholderCake;
    if (image.startsWith("http")) return image;
    return placeholderCake;
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

  const handleChange = (event) => {
    setValue(event.target.value);
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
      <h4>Price: ৳ {data.price}</h4>
      <hr style={{ display: "flex", width: "90%" }} />

      <div style={{ display: "flex", width: "90%" }}>
        <img
          src={getImageUrl(data.image)}
          alt={data.name || "Cake"}
          style={{ margin: "auto", width: "450px" }}
        />

        <hr />
        <div style={{ margin: "auto", width: "50%" }}>
          <FormControl>
            <FormLabel id="size-group">Select Size</FormLabel>
            <RadioGroup
              aria-labelledby="size-group"
              name="size-radio-group"
              value={value}
              onChange={handleChange}
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

          <FormGroup style={{ marginLeft: "40%" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Home Delivery"
            />
            <FormControlLabel control={<Checkbox />} label="Pickup from Shop" />
          </FormGroup>

          <div style={{ width: "60%", margin: "20px auto" }}>
            <input
              type="text"
              placeholder="Enter Delivery Area / Zip Code"
              style={{
                width: "100%",
                marginBottom: "10px",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
            <h4>Delivery Date</h4>
            {/* later you can add a date picker */}
            <h5 style={{ marginTop: "10px" }}>Use Address Book</h5>
            <Stack direction="row" spacing={2} style={{ marginTop: "10px" }}>
              <Button
                variant="contained"
                onClick={() => navigate(`/payment`)}
              >
                Checkout
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};
