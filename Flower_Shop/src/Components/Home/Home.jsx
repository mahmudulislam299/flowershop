import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

import slide1 from "../../images/slider1.jpg";
import slide2 from "../../images/slider2.jpg";
import slide3 from "../../images/slider3.jpg";
import slide4 from "../../images/slider4.jpg";

// 👇 dynamically load all .jpg files from src/images (for best-seller cakes)
const images = require.context("../../images", false, /\.jpg$/);

const slides = [
  {
    id: 1,
    image: slide1,
    title: "Celebrate Every Moment with Cake 🎉",
    subtitle: "Freshly baked, beautifully decorated, and delivered on time.",
    cta: "Shop Birthday Cakes",
  },
  {
    id: 2,
    image: slide2,
    title: "Anniversary Specials ❤️",
    subtitle: "Make your special day unforgettable with our premium cakes.",
    cta: "View Anniversary Collection",
  },
  {
    id: 3,
    image: slide3,
    title: "Kids Theme Cakes 🎂",
    subtitle: "Superhero, cartoon, unicorn & more – custom themes available.",
    cta: "Explore Kids Cakes",
  },
  {
    id: 4,
    image: slide4,
    title: "Midnight Surprise Delivery 🌙",
    subtitle: "Late-night cake delivery to make their day extra special.",
    cta: "Order Now",
  },
];

export const HomePage = () => {
  const [cakes, setCakes] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const API_URL_RAW = process.env.REACT_APP_API_URL || "http://localhost:5001";
  const API_URL = API_URL_RAW.replace(/\/$/, "");

  // 🧠 Auto-slide effect (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 🧠 Fetch some cakes for "Best Sellers" section
  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const res = await axios.get(`${API_URL}/cake/homepage`);
        setCakes(res.data.slice(0, 6)); // first 6 cakes
      } catch (err) {
        console.error("Error fetching cakes for homepage:", err);
      }
    };
    fetchCakes();
  }, [API_URL]);

  const handleDotClick = (index) => setCurrentSlide(index);
  const handlePrev = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  // ✅ get cake image from src/images/{id}.jpg with fallback
  const getCakeImage = (cakeId) => {
    try {
      return images(`./${cakeId}.jpg`);
    } catch (e) {
      console.warn(`No local image found for cake id=${cakeId}`);
      return slide1; // fallback
    }
  };

  return (
    <div className="home-container">
      {/* ===== Hero Slider ===== */}
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${
              index === currentSlide ? "active" : "inactive"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="slide-overlay" />
            <div className="slide-text">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <Link to="/product-page" className="explore-btn">
                {slide.cta}
              </Link>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button className="hero-arrow left" onClick={handlePrev}>
          ‹
        </button>
        <button className="hero-arrow right" onClick={handleNext}>
          ›
        </button>

        {/* Dots */}
        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${
                index === currentSlide ? "active-dot" : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      {/* ===== Highlight Bar (Delivery / Freshness / Support) ===== */}
      <section className="info-strip">
        <div className="info-item">
          <span className="info-icon">🚚</span>
          <div>
            <h4>Same-Day Delivery</h4>
            <p>Shahbag & nearby areas (T&amp;C apply)</p>
          </div>
        </div>
        <div className="info-item">
          <span className="info-icon">🧁</span>
          <div>
            <h4>Freshly Baked</h4>
            <p>Baked just before your order time</p>
          </div>
        </div>
        <div className="info-item">
          <span className="info-icon">📞</span>
          <div>
            <h4>Instant Support</h4>
            <p>Call / WhatsApp for custom orders</p>
          </div>
        </div>
      </section>

      {/* ===== Featured Cakes Section ===== */}
      <section className="featured-cakes">
        <div className="section-header">
          <div>
            <h2>Our Best Sellers</h2>
            <p className="section-subtitle">
              Customers’ most loved cakes – perfect for any celebration.
            </p>
          </div>

          {/* 🔘 See All Cakes button */}
          <Link to="/product-page" className="see-all-btn">
            See All Cakes →
          </Link>
        </div>

        {cakes.length === 0 ? (
          <p className="no-cakes">
            Our cakes are getting ready in the oven... 🍰  
            Please check back in a moment.
          </p>
        ) : (
          <div className="cake-grid">
            {cakes.map((cake) => (
              <Link
                key={cake.id}
                to={`/cake/${cake.id}`}
                className="cake-card"
              >
                <div className="cake-image-wrapper">
                  <img
                    src={getCakeImage(cake.id)}
                    alt={cake.name}
                    className="cake-image"
                  />
                </div>
                <h3>{cake.name}</h3>
                <p className="cake-price">৳ {cake.price}</p>
                <button className="cake-view-btn">View Details</button>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* ===== Shop by Occasion ===== */}
      <section className="occasion-section">
        <h2>Shop by Occasion</h2>
        <p className="section-subtitle">
          Pick the perfect cake based on your special moment.
        </p>
        <div className="occasion-grid">
          <Link to="/product-page" className="occasion-card">
            <span className="occasion-icon">🎉</span>
            <h3>Birthday Cakes</h3>
            <p>Classic, premium & photo cakes for all ages.</p>
          </Link>
          <Link to="/product-page" className="occasion-card">
            <span className="occasion-icon">❤️</span>
            <h3>Anniversary Cakes</h3>
            <p>Elegant designs to celebrate your love.</p>
          </Link>
          <Link to="/product-page" className="occasion-card">
            <span className="occasion-icon">🦄</span>
            <h3>Kids Theme Cakes</h3>
            <p>Cartoon, superhero, princess & more.</p>
          </Link>
          <Link to="/product-page" className="occasion-card">
            <span className="occasion-icon">📸</span>
            <h3>Photo Cakes</h3>
            <p>Print your favorite memories on cake.</p>
          </Link>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section className="how-it-works">
        <h2>How to Order</h2>
        <div className="steps-grid">
          <div className="step-card">
            <span className="step-number">1</span>
            <h3>Choose Your Cake</h3>
            <p>Select flavor, size & custom message.</p>
          </div>
          <div className="step-card">
            <span className="step-number">2</span>
            <h3>Select Date & Time</h3>
            <p>Pick delivery time – same-day available.</p>
          </div>
          <div className="step-card">
            <span className="step-number">3</span>
            <h3>We Deliver with Care</h3>
            <p>Fresh, on-time delivery right to your door.</p>
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="why-us">
        <h2>Why People Love Shahbag Cake Shop</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>✅ Premium Ingredients</h3>
            <p>No compromise on quality, taste & hygiene.</p>
          </div>
          <div className="why-card">
            <h3>✅ On-Time Delivery</h3>
            <p>We know timing matters for your surprise.</p>
          </div>
          <div className="why-card">
            <h3>✅ Custom Designs</h3>
            <p>Send us a design and we’ll bake it for you.</p>
          </div>
        </div>
      </section>

      {/* Final CTA strip */}
      <section className="bottom-cta">
        <div className="bottom-cta-content">
          <h2>Ready to Make Someone Smile Today? 😊</h2>
          <p>Order a cake now and we’ll handle the rest.</p>
          <Link to="/product-page" className="bottom-cta-btn">
            See All Cakes
          </Link>
        </div>
      </section>
    </div>
  );
};
