import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductPage.css";

export const ProductPage = () => {
  const [home, setHome] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";
  const home_url = `${API_URL}/flower/homepage`;

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const res = await axios.get(home_url);
      console.log("ProductPage data:", res.data);
      setHome(res.data);
    } catch (error) {
      console.error("Error fetching product page data:", error);
    }
  };

  return (
    <div className="ProductPage_Main">
      {/* left filter */}
      <div className="ProductPage_first">
        <p>Spring Bouquets</p>
        <p>Lobby and Office Flowers</p>
        <p>Luxuary Collection</p>
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
        {home.map((el) => (
          <div key={el.id} className="prductDetail_productPage">
            <img src={el.image} alt={el.name} />
            <h3>{el.name}</h3>
            <p>{el.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
