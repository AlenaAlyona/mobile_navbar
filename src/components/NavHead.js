import "./navhead.css";
import Logo from "../assets/logo.svg";
import Search from "../assets/search-icon.svg";
import Cart from "../assets/cart-icon.svg";

function navhead(props) {
  return (
    <div className="navhead">
      <div className="navhead-left">
        <div className="hamburger-menu" onClick={props.showMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="close-btn" id="close"></div>
        <a href="#home">
          <img className="logo" src={Logo} alt="STOX logo" />
        </a>
      </div>

      <div className="navhead-middle">
        <a href="#everyday">Everyday</a>
        <a href="#sports">Sports</a>
        <a href="#travel">Travel</a>
        <a href="#medical">Medical</a>
      </div>

      <div className="navhead-right">
        <a href="#ambassadors">Ambassadors</a>
        <a href="#technology">Technology</a>
        <a href="#reviews">Reviews</a>
        <a href="#help">Help</a>
        <a href="#account">Account</a>
        <img src={Search} className="icon" id="search" alt="search icon"></img>
        <img
          src={Cart}
          className="icon"
          id="cart"
          alt="shopping cart icon"
        ></img>
      </div>
    </div>
  );
}

export default navhead;
