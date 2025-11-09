// src/Components/ProductPage/ProductPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProductPage.css";
import placeholderCake from "../../images/slider1.jpg"; // fallback image

export const ProductPage = () => {
  const [cakes, setCakes] = useState([]);

  // Base API URL (from .env or fallback)
  const API_URL_RAW = process.env.REACT_APP_API_URL || "http://localhost:5001";
  const API_URL = API_URL_RAW.replace(/\/$/, ""); // remove trailing slash if any
  const home_url = `${API_URL}/cake/homepage`;

  const getImageUrl = (image) => {
    if (!image) return placeholderCake;
    if (image.startsWith("http")) return image;
    // future: map relative paths if you host images locally
    return placeholderCake;
  };

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const res = await axios.get(home_url);
        console.log("ProductPage cakes:", res.data);
        setCakes(res.data);
      } catch (error) {
        console.error("Error fetching cake data:", error);
      }
    };

    fetchHomeData();
  }, [home_url]);

  return (
    <div className="ProductPage_Main">
      {/* left filter */}
      <div className="ProductPage_first">
        <p>Birthday Cakes</p>
        <p>Anniversary Cakes</p>
        <p>Kids Theme Cakes</p>
        <p>Premium Collection</p>
        <hr />
        <h2>Filter your results</h2>
        <p>Price range</p>
        <div className="priceSelect">
          <div>
            <input type="checkbox" id="p1" />
            <span> 500 - 1000</span>
          </div>
          <div>
            <input type="checkbox" id="p2" />
            <span> 1000 - 1500</span>
          </div>
          <div>
            <input type="checkbox" id="p3" />
            <span> 1500 - 2000</span>
          </div>
          <div>
            <input type="checkbox" id="p4" />
            <span> 2000 - 3000</span>
          </div>
        </div>
        <hr />
      </div>

      {/* right grid */}
      <div className="ProductPage_second">
        {cakes.length === 0 && (
          <p style={{ gridColumn: "1 / -1" }}>No cakes found.</p>
        )}

        {cakes.map((cake) => (
          <Link
            key={cake.id}
            to={`/cake/${cake.id}`}
            className="productCard_link"
          >
            <div className="productDetail_productPage">
              <img src={getImageUrl(cake.image)} alt={cake.name} />
              <h3>{cake.name}</h3>
              <p className="product_price">৳ {cake.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
