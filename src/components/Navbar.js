import "./navbar.css";
import Logo from "../assets/logo.svg";
import Search from "../assets/search-icon.svg";
import Cart from "../assets/cart-icon.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="hamburger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="close-btn" id="close"></div>
      <a href="#home">
        <img className="logo" src={Logo} alt="STOX logo" />
      </a>
      <a href="#everyday">Everyday</a>
      <a href="#sports">Sports</a>
      <a href="#travel">Travel</a>
      <a href="#medical">Medical</a>
      <a href="#ambassadors">Ambassadors</a>
      <a href="#technology">Technology</a>
      <a href="#reviews">Reviews</a>
      <a href="#help">Help</a>
      <a href="#account">Account</a>
      <img src={Search} className="icon" alt="search icon"></img>
      <img
        src={Cart}
        fill="FFF"
        className="icon"
        alt="shopping cart icon"
      ></img>
    </div>
  );
}

export default Navbar;
