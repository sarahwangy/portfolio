import "./style.scss";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo-1.png";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link to={`/`}>
            <img
              src={Logo}
              style={{ width: "100px", borderRadius: "100%", border: "1px solid red" }}
            />
          </Link>
          <Link to={`/`}>
            <div className="itemContainer">
              <span>Home</span>
            </div>
          </Link>
          <Link to={`/about`}>
            <div className="itemContainer">
              <span>About</span>
            </div>
          </Link>
          <Link to={`/skill`}>
            <div className="itemContainer">
              <span>Skills</span>
            </div>
          </Link>
          <Link to={`/project`}>
            <div className="itemContainer">
              <span>Projects</span>
            </div>
          </Link>
          <Link to={`/contact`}>
            <div className="itemContainer">
              <span>Contact</span>
            </div>
          </Link>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
