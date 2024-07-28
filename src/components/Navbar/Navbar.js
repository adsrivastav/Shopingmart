import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import AuthContext from "../../context/Auth/AuthContext";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const { user, logout } = useContext(AuthContext);
  const isAuthenticated = user;

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onLogoutHandler = () => {
    scrollTop();
    logout();
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={scrollTop}>
          ShopSmart
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              activeClassName="active-links"
              to="/"
              className="nav-links"
              exact
              onClick={closeMobileMenu}
            >
              <span>
                <img
                  className="icon_styles"
                  src="https://cdn-icons-png.flaticon.com/128/1040/1040993.png"
                  alt="Home"
                />
              </span>
              Home
            </NavLink>
          </li>
          {isAuthenticated && (
            <>
              <li className="nav-item">
                <NavLink
                  activeClassName="active-links"
                  to="/myorders"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <span>
                    <img
                      className="icon_styles"
                      src="https://cdn-icons-png.flaticon.com/128/859/859270.png"
                      alt="My Orders"
                    />
                  </span>
                  My Orders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active-links"
                  to="/cart"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <span>
                    <img
                      className="icon_styles"
                      src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
                      alt="Cart"
                    />
                  </span>
                  Cart
                </NavLink>
              </li>
            </>
          )}
          <li className="nav-item">
            {isAuthenticated ? (
              <NavLink
                to="/"
                onClick={onLogoutHandler}
                activeClassName="active-links"
                className="nav-links"
              >
                <span>
                  <img
                    className="icon_styles"
                    src="https://cdn-icons-png.flaticon.com/128/10309/10309341.png"
                    alt="Logout"
                  />
                </span>
                Logout
              </NavLink>
            ) : (
              <NavLink
                activeClassName="active-links"
                to="/signin"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <span>
                  <img
                    className="icon_styles"
                    src="https://cdn-icons-png.flaticon.com/128/3518/3518746.png"
                    alt="Sign In"
                  />
                </span>
                Sign In
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
