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
            src="https://images.pexels.com/photos/4109993/pexels-photo-4109993.jpeg" 
            alt="Shahbag Cake Shop Logo"
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
