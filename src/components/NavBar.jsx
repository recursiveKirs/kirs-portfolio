import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.svg";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/" className="home-link">
          <img src={logo} className="app-logo" alt="logo" />
          <div className="home-link-text">Kirs Imsong</div>
        </Link>
        <Link to="/gallery" className="navbar-link">
          Gallery
        </Link>
        <Link to="/experience" className="navbar-link">
          Experience
        </Link>
      </div>
    </div>
  );
};
