import { Link } from "react-router-dom";
import "./Navbar.css";
import { Profile } from "./Profile";

export const Navbar = () => {
  return (
    <header className="navbar">
      {/* Brand section */}
      <div className="navbar_brand">
        <Link to="/" className="navbar_brand_link">
          <img
            className="logo_flower_shop"
            src="cake-logo.jpg"
            alt="Aishajaa's Cake Shop Logo"
          />
          <div className="navbar_brand_text">
            <span className="navbar_brand_title">Aishajaa's Cake Shop</span>
            <span className="navbar_brand_tagline">
              Fresh cakes, every celebration 🎂
            </span>
          </div>
        </Link>
      </div>

      {/* Search bar */}
      <div className="navbar_input">
        <input
          className="input_nav"
          type="text"
          placeholder="Search cakes (chocolate, vanilla, red velvet...)"
        />
        <i className="fa fa-search"></i>
      </div>

      {/* Profile / Auth */}
      <div className="navbar_login">
        <Profile />
      </div>
    </header>
  );
};
