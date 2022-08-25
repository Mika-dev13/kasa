import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/Banner.css";

function Banner() {
  return (
    <header className="kasa-banner">
      <Link to="/">
        <img src={logo} alt="logo du site" className="kasa-logo" />
      </Link>

      <nav className="kasa-navigation">
        <Link to="/" className="kasa-navigation-item">
          Accueil
        </Link>
        <Link to="/about" className="kasa-navigation-item">
          À propos
        </Link>
      </nav>
    </header>
  );
}

export default Banner;
