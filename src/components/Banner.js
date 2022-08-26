import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/Banner.css";

function Banner() {
  return (
    <header className="kasa-banner">
      <Link to="/">
        <img src={logo} alt="logo du site" className="kasa-logo" />
      </Link>

      <nav className="kasa-navigation">
        <NavLink
          to="/"
          className="kasa-navigation-item"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "none",
              backgroundColor: "white",
            };
          }}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className="kasa-navigation-item"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "none",
              backgroundColor: "white",
            };
          }}
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Banner;
