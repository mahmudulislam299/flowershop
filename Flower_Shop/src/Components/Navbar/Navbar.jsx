import { Link } from "react-router-dom";
import "./Navbar.css";
import { Profile } from "./Profile";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <img
            className="logo_flower_shop"
            src="cake-logo.jpg" 
            alt="Logo"
          />
        </Link>
      </div>

      <div className="navbar_input">
        <input
          className="input_nav"
          type="text"
          placeholder="Search cakes (chocolate, vanilla, red velvet...)"
        />
        <i className="fa fa-search"></i>
      </div>

      <div className="navbar_login">
        <Profile />
      </div>
    </div>
  );
};
