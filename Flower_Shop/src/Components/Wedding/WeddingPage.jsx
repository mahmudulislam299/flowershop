import React from "react";
import { Link } from "react-router-dom";
import "./WeddingPage.css";

export const WeddingPage = () => {
  const weddingCakes = [
    {
      id: 1,
      name: "Classic 3-Tier Wedding Cake",
      image:
        "https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg",
      desc: "Elegant vanilla tiers with floral fondant and golden trim.",
    },
    {
      id: 2,
      name: "Red Velvet Romance",
      image:
        "https://images.pexels.com/photos/264892/pexels-photo-264892.jpeg",
      desc: "Rich red velvet base layered with cream cheese frosting.",
    },
    {
      id: 3,
      name: "Golden Anniversary Cake",
      image:
        "https://images.pexels.com/photos/4109993/pexels-photo-4109993.jpeg",
      desc: "Luxurious golden frosting with edible pearls and fondant roses.",
    },
    {
      id: 4,
      name: "Customized Engagement Cake",
      image:
        "https://images.pexels.com/photos/3609409/pexels-photo-3609409.jpeg",
      desc: "Personalized engagement cakes with names and theme colors.",
    },
  ];

  return (
    <div className="wedding-container">
      <header className="wedding-header">
        <h1>Wedding & Celebration Cakes</h1>
        <p>
          From engagements to anniversaries — make every moment unforgettable
          with our handcrafted designer cakes.
        </p>
      </header>

      <section className="wedding-grid">
        {weddingCakes.map((cake) => (
          <div className="wedding-card" key={cake.id}>
            <div className="wedding-img-wrap">
              <img src={cake.image} alt={cake.name} />
            </div>
            <h3>{cake.name}</h3>
            <p>{cake.desc}</p>
            <Link to="/payment" className="wedding-btn">
              Order Now
            </Link>
          </div>
        ))}
      </section>

      <section className="wedding-info">
        <h2>💍 Custom Wedding Cake Orders</h2>
        <p>
          We design bespoke cakes for weddings, mehendi, holud, and anniversaries.
          Choose your flavor — vanilla, chocolate fudge, red velvet, or fresh fruit.
        </p>
        <p>
          Visit our Shahbag outlet or order online. We offer <b>free delivery
          across Dhaka</b> for orders over ৳5000.
        </p>
        <Link to="/contact" className="wedding-btn contact-btn">
          Contact Us for Custom Design
        </Link>
      </section>
    </div>
  );
};
