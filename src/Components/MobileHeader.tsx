import { Link, useLocation } from "react-router-dom";
import "../Styles.css/Global.css";
import CartLogo from "../Images/CartLogo.svg";
import Logo from "../Images/forum-webpage-logo.png";
import cartContext, { useCartContext } from "./CartContext";
import HamburgerMenuIcon from "../Images/HamburgerMenu.svg";
import "../Styles.css/MobileHeader.css";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
function MobileHeader() {
  const { cart } = useCartContext();
  const [isHamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);

  return (
    <>
      <HamburgerMenu visibilityClass={isHamburgerMenuVisible === true ? "visible" : "invisible"} />

      <header>
        <nav className="mobile-header">
          <div className="header-logo-div">
            <ul>
              <li>
                <Link
                  to="/"
                  className="page-tab"
                  style={{ textDecoration: "none" }}
                  onClick={() => setHamburgerMenuVisible(false)}
                >
                  {useLocation().pathname === "/" ? <></> : <img src={Logo} className="header-logo"></img>}
                </Link>
              </li>
            </ul>
          </div>

          <div className="header__right-side-div">
            <ul>
              <li>
                <div className="cart-div">
                  <Link to="/cartPage" onClick={() => setHamburgerMenuVisible(false)}>
                    <img src={CartLogo} className="cart-logo" style={{ textDecoration: "none" }}></img>
                  </Link>
                  <p className="cart-item-quantity">{cart.length}</p>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <img
                  src={HamburgerMenuIcon}
                  className="hamburger-menu-image"
                  onClick={() => {
                    isHamburgerMenuVisible === false ? setHamburgerMenuVisible(true) : setHamburgerMenuVisible(false);
                    console.log("hello");
                  }}
                ></img>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default MobileHeader;
