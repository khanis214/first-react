import "../Css/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [number, setNumber] = useState(0);
  const [open, setOpen] = useState(true);

  const navItems = ["Home", "favorites", "Categoris", "About"];
  return (
    <nav className="Nav">
      <div className={open ? "Navbar" : "Navbar open"}>
        <div className="Navbar-box">
          <div>
            <h2>Logo</h2>
          </div>
          <div>
            <ul className="NavbarItems">
              {navItems.map((value, index) => {
                return (
                  <Link
                    to={value ? `/${value}` : ""}
                    onClick={() => setNumber(value)}
                    className={
                      number === value ? "active link-design" : "link-design"
                    }
                  >
                    {value}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="Navbar-buttons">
            <button className="btn btn-green btn-desktop">About</button>

            <div
              className="hambargure"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="navbar-mobile">
          <ul className="Navbar-mobile-list">
            {navItems.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
          <button className="btn btn-green btn-mobile">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
