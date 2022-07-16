import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <div class="nav-wrapper">
        <Link to="/" className="brand-logo">
          React
        </Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
