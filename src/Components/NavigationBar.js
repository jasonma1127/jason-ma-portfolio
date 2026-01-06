import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavigationBar(props) {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);

  return (
    <div className={`navigation-bar ${props.page}`}>
      <Link to="/" className="logo">
        <img src="/logo.png" alt="Jason Ma" className="logo-image" />
      </Link>
      <div className="nav-btn">
        <ul className={click? "nav-items active" : "nav-items"}>
          <li className="nav-item" onClick={clickHandler}>
            <NavLink
              to={process.env.PUBLIC_URL + "/"}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item" onClick={clickHandler}>
            <NavLink
              to={process.env.PUBLIC_URL + "/about"}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item" onClick={clickHandler}>
            <NavLink
              to={process.env.PUBLIC_URL + "/portfolios"}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Portfolios
            </NavLink>
          </li>
          <li className="nav-item" onClick={clickHandler}>
            <NavLink
              to={process.env.PUBLIC_URL + "/blog"}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <span className="nav-item-icons pad" onClick={clickHandler}>
          <FontAwesomeIcon icon={click? faTimes : faBars} className="fa-3x"/>
        </span>
        <span className="nav-item-icons mobile" onClick={clickHandler}>
          <FontAwesomeIcon icon={click? faTimes : faBars} className="fa-1x"/>
        </span>
      </div>
    </div>
  );
}

export default NavigationBar;
