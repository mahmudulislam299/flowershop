import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

import slide1 from "../../images/slider1.jpg";
import slide2 from "../../images/slider2.jpg";
import slide3 from "../../images/slider3.jpg";
import slide4 from "../../images/slider4.jpg";

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

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // change slide every 5s

    return () => clearInterval(interval);
  }, []);

  // Fetch some cakes for "Best Sellers" section
  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const res = await axios.get(`${API_URL}/cake/homepage`);
        setCakes(res.data.slice(0, 6)); // show first 6 as best sellers
      } catch (err) {
        console.error("Error fetching cakes for homepage:", err);
      }
    };
    fetchCakes();
  }, [API_URL]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const getImageUrl = (image) => {
    if (!image) return "/cakes/default.jpg";
    if (typeof image === "string" && image.startsWith("http")) return image;
    return image; // imported local image
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
              backgroundImage: `url(${getImageUrl(slide.image)})`,
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

      {/* ===== Featured Cakes Section ===== */}
      <section className="featured-cakes">
        <h2>Our Best Sellers</h2>
        <div className="cake-grid">
          {cakes.map((cake) => (
            <Link key={cake.id} to={`/cake/${cake.id}`} className="cake-card">
              <img
                src={
                  cake.image && cake.image.startsWith("http")
                    ? cake.image
                    : "/cakes/default.jpg"
                }
                alt={cake.name}
              />
              <h3>{cake.name}</h3>
              <p>৳ {cake.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
