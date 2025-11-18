import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-inner">
        {/* Brand / Logo */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="cake-logo.jpg" alt="Aishajaa's Cake Shop Logo" />
          </div>
          <div className="footer-brand-text">
            <h2>Aishajaa's Cake Shop</h2>
            <p>Freshly baked happiness for every occasion.</p>
          </div>
        </div>

        {/* Info columns */}
        <div className="footer-grid">
          <div className="footer-info">
            <h3>Contact</h3>
            <p>📞 +880 1712-345678</p>
            <p>🏠 Shahbag More, Ramna, Dhaka-1000</p>
            <p>✉️ info@shahbagcakes.com</p>
          </div>

          <div className="footer-info">
            <h3>Opening Hours</h3>
            <p>Sunday – Thursday: <strong>9:00 AM – 10:00 PM</strong></p>
            <p>Friday: <strong>3:00 PM – 10:00 PM</strong></p>
            <p>Saturday: <strong>9:00 AM – 11:00 PM</strong></p>
          </div>

          <div className="footer-info">
            <h3>Quick Links</h3>
            <a href="#menu">🎂 Our Cakes</a>
            <a href="#specials">⭐ Special Offers</a>
            <a href="#order">🛒 Order Online</a>
            <a href="#contact">📍 Find Us</a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="footer-text">
        <p>
          Choose <strong>Aishajaa's Cake Shop</strong> for fresh, made-to-order cakes,
          cupcakes and desserts for birthdays, weddings and all your special days.
        </p>
        <p>
          We offer same-day delivery across Dhaka (Dhanmondi, Banani, Gulshan,
          Motijheel & Old Dhaka). Order online and get your cake delivered with care.
        </p>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Aishajaa's Cake Shop. All rights reserved.</span>
          <span>Made with ❤️ in Dhaka</span>
        </div>
      </div>
    </footer>
  );
};
