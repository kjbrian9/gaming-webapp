import { Link, useLocation } from "react-router-dom";
import "../Styles.css/Global.css";
import CartLogo from "../Images/CartLogo.svg";
import Logo from "../Images/forum-webpage-logo.png";
import cartContext, { useCartContext } from "./CartContext";
import "../Styles.css/Header.css";
function Header() {
  const { cart } = useCartContext();

  return (
    <header>
      <nav>
        <ul className="header">
          <li>
            <div className="header-logo-div">
              <Link to="/" className="page-tab" style={{ textDecoration: "none" }}>
                {useLocation().pathname === "/" ? <></> : <img src={Logo} className="header-logo"></img>}
              </Link>
            </div>
          </li>

          <div className="header__right-side-div">
            <li>
              <Link to="/whatsNewPage" className="page-tab" style={{ textDecoration: "none" }}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/keyboardPage" className="page-tab" style={{ textDecoration: "none" }}>
                Keyboards
              </Link>
            </li>

            <li>
              <Link to="/PcPage" className="page-tab" style={{ textDecoration: "none" }}>
                PC
              </Link>
            </li>
            <li>
              <Link to="/storePage" className="page-tab" style={{ textDecoration: "none" }}>
                Headphones
              </Link>
            </li>
            <li>
              <Link to="/aboutUsPage" className="page-tab" style={{ textDecoration: "none" }}>
                What's New
              </Link>
            </li>

            <li>
              <Link to="/supportPage" className="page-tab" style={{ textDecoration: "none" }}>
                Support
              </Link>
            </li>
            <li>
              <div className="cart-div">
                <Link to="/cartPage">
                  <img src={CartLogo} className="cart-logo" style={{ textDecoration: "none", marginLeft: "2vw" }}></img>
                </Link>
                <p className="cart-item-quantity">{cart.length}</p>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
