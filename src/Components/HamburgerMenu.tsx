import { Link } from "react-router-dom";
import "../Styles.css/HamburgerMenu.css";

interface Props {
  visibilityClass: string;
}

function HamburgerMenu({ visibilityClass }: Props) {
  return (
    <div className={"hamburger-menu-div " + visibilityClass}>
      <ul>
        <li>
          <Link to="/whatsNewPage" className="page-tab" style={{ textDecoration: "none" }}>
            About us
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/keyboardPage" className="page-tab" style={{ textDecoration: "none" }}>
            Keyboards
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/PcPage" className="page-tab" style={{ textDecoration: "none" }}>
            PC
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/storePage" className="page-tab" style={{ textDecoration: "none" }}>
            Headphones
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/aboutUsPage" className="page-tab" style={{ textDecoration: "none" }}>
            What's New
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/supportPage" className="page-tab" style={{ textDecoration: "none" }}>
            Support
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
