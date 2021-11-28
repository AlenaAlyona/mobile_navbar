import "./navhead.css";
import Logo from "../assets/logo.svg";
import Search from "../assets/search-icon.svg";
import Cart from "../assets/cart-icon.svg";

function NavHead(props) {
  return (
    <div className="navhead">
      <div className="navhead-left">
        {props.menuOpen ? (
          <div className="close-btn" onClick={props.showMenu}></div>
        ) : (
          <div className="hamburger-menu" onClick={props.showMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}

        <a href="#home">
          <img className="logo" src={Logo} alt="STOX logo" fill="FFF" />
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

export default NavHead;
