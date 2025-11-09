import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import "./Home.css";

export const HomePage = () => {
  const [home, setHome] = useState([]);
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";
  const home_url = `${API_URL}/flower/homepage`; // backend can stay same for now

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const res = await axios.get(home_url);
      console.log("Home data:", res.data);
      setHome(res.data);
    } catch (error) {
      console.error("Error fetching home data:", error);
    }
  };

  const images = [
    { url: "https://images.pexels.com/photos/4109993/pexels-photo-4109993.jpeg" },
    { url: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg" },
    { url: "https://images.pexels.com/photos/291530/pexels-photo-291530.jpeg" },
    { url: "https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg" },
    { url: "https://images.pexels.com/photos/1026127/pexels-photo-1026127.jpeg" },
  ];

  const topCategories = [
    { label: "Birthday Cakes", path: "/product-page" },
    { label: "Wedding Cakes", path: "/wedding" },
    { label: "Anniversary Specials", path: "/product-page" },
    { label: "Customized Photo Cakes", path: "/product-page" },
    { label: "Cupcakes & Desserts", path: "/potted-plant" }, // reuse route as dessert section
  ];

  return (
    <div className="home_wrapper">
      <div className="Header" />

      <div className="flower_Main">
        {/* Hero slider */}
        <div className="flower_home_slider">
          <SimpleImageSlider
            width={1100}
            height={360}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            bgColor={"#ffffff"}
          />
        </div>

        {/* Top categories */}
        <section className="home_categories">
          <h3>Top Cake Categories</h3>
          <div className="home_categories_list">
            {topCategories.map((cat) => (
              <button
                key={cat.label}
                className="category_chip"
                onClick={() => navigate(cat.path)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* About / info cards */}
        <section className="flower_home_about">
          <div className="flower_home_card">
            <h3>Office & Corporate Orders</h3>
            <p>
              Celebrate promotions, farewells and office events with designer cakes
              delivered to your company on time, anywhere in Dhaka.
            </p>
            <Link to="/product-page" className="home_link">
              View corporate cakes
            </Link>
          </div>

          <div className="flower_home_center">
            <h2>Shahbag Cake Shop, Dhaka</h2>
            <p>
              From classic black forest and red velvet to rich chocolate fudge and
              fresh fruit cakes – we bake every cake fresh in Shahbag and deliver
              across Dhaka city.
            </p>
            <p>
              You can pre-order custom design cakes for birthdays, weddings, holud,
              baby showers and any celebration you can imagine.
            </p>
            <p className="home_highlight">
              Same-day delivery · Cashless payment · 100% Halal ingredients 🎂
            </p>
          </div>

          <div className="flower_home_card">
            <h3>Weddings & Events</h3>
            <p>
              Multi-tier wedding cakes, engagement cakes, holud dessert tables and
              elegant cupcakes to match your event theme and décor.
            </p>
            <Link to="/wedding" className="home_link">
              Wedding cake ideas
            </Link>
          </div>
        </section>

        {/* Featured cakes */}
        <section className="flower_section">
          <h2 className="section_title">Featured Cakes</h2>
          <p className="section_subtitle">
            Popular choices our customers in Dhaka order again and again.
          </p>

          <div className="flower_div">
            {home.map((el) => (
              <div
                key={el.id}
                className="flower_div_first"
                onClick={() => navigate(`/product-details/home/${el.id}`)}
              >
                <div className="flower_image_wrap">
                  <img src={el.image} alt={el.name} />
                </div>
                <h3 className="flower_name">{el.name}</h3>
                <p className="flower_price">৳ {el.price}</p>
                <button className="flower_btn">View details</button>
              </div>
            ))}
          </div>
        </section>

        {/* Desserts / cupcakes banner (was potted plants) */}
        <div className="potted_plants">
          <div className="potted_plants_inner">
            <div>
              <h2>Cupcakes, Brownies & Desserts</h2>
              <p>
                Treat yourself with mini cupcakes, brownies, jar cakes and dessert boxes.
                Perfect for small get-togethers, office treats and gifts.
              </p>
              <Link to="/potted-plant" className="home_link_btn">
                Browse desserts
              </Link>
            </div>
            <Link to="/potted-plant">
              <img
                src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
                alt="Dessert Platter"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
