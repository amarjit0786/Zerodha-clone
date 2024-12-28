import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();
  const location = useLocation(); // To track the current route

  // Check login status when the component mounts
  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find(row => row.startsWith("token="))
      ?.split("=")[1];
    setIsLoggedIn(!!token); // Set logged-in state based on token presence
  }, []);

  // Handle logout functionality
  const handleLogout = () => {
    // Clear the token cookie
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false); // Update the login state to logged out
    navigate("/login"); // Redirect to login page after logout
  };

  // Function to determine if a nav item is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg border-bottom fixed-top " style={{ backgroundColor: "#FFF" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              {/* Common nav items */}
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/about") ? "active-nav-item" : ""}`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/product") ? "active-nav-item" : ""}`}
                  to="/product"
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/pricing") ? "active-nav-item" : ""}`}
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/support") ? "active-nav-item" : ""}`}
                  to="/support"
                >
                  Support
                </Link>
              </li>

              {/* Conditionally render Signup/Login or Logout */}
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${isActive("/signup") ? "active-nav-item" : ""}`}
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${isActive("/login") ? "active-nav-item" : ""}`}
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button className="nav-link btn" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
