import React from 'react'
import WebsiteLayout from '../WebsiteLayout'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    {/* <WebsiteLayout> */}
<header>
  <div className="header-main-div">
    <div className="topbar">
      <div className="topbar-addrees">
        <div className="topbar-contact-adrees">
          <div className="email-text">
            <a href="#">
              <i className="fa-regular fa-envelope" />
              Isoviafreightmanagement@gmail.com
            </a>
          </div>
          <div className="number-text">
            <a href="#">
              <i className="fa-solid fa-phone" />
              +16472415999
            </a>
          </div>
        </div>
        <div className="topbar-links">
          <ul className="list-of-links">
            <li className="topbar-links">
              <NavLink to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="topbar-links">
              <NavLink to="/loginmain">
                Login
              </NavLink>
            </li>
            <li className="topbar-links">
              <NavLink to="/registration">
                Register
              </NavLink>
            </li>
            {/* <li className="topbar-links">
              <a href="#">Login Drivers</a>
            </li>
            <li className="topbar-links">
              <a href="#">Login Account</a>
            </li> */}
            <li className="topbar-links">
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li className="topbar-links">
              <a href="#">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
            <li className="topbar-links">
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container header-bar">
      <div className="row">
        <div className="col-md-2 responsive-width-header">
          <div className="header-logo">
            <NavLink to="/">
            <img src="images/logo.png" alt="" />
            </NavLink>
          </div>
        </div>
        <div className="col-md-10 responsive-width-header">
          <div className="header-navbar">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                             <ul className="navbar-nav">
                            <li className="nav-item">
                              <NavLink
                                to="/"
                                className={({ isActive }) =>
                                  `nav-link ${isActive ? 'active' : ''}`
                                }
                              >
                                Home
                              </NavLink>
                            </li>

                            <li className="nav-item">
                              <NavLink
                                to="/aboutus"
                                className={({ isActive }) =>
                                  `nav-link ${isActive ? 'active' : ''}`
                                }
                              >
                                About
                              </NavLink>
                            </li>

                            <li className="nav-item">
                              <NavLink
                                to="/partner"
                                className={({ isActive }) =>
                                  `nav-link ${isActive ? 'active' : ''}`
                                }
                              >
                                Partners
                              </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Software
                              </a>
                              <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/freightmanagement">Isovia Freight Management System</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/fleetmanagement">Isovia Fleet Management System</NavLink></li>
                              </ul>
                            </li>

                            <li className="nav-item">
                              <NavLink
                                to="/news"
                                className={({ isActive }) =>
                                  `nav-link ${isActive ? 'active' : ''}`
                                }
                              >
                                News
                              </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Blog
                              </a>
                              <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/Article1">Article 1 - Isovia</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/Article2">Article 2 - Isovia</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/Article3">Article 3 - Isovia</NavLink></li>
                              </ul>
                            </li>

                            <li className="nav-item">
                              <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                  `nav-link ${isActive ? 'active' : ''}`
                                }
                              >
                                Contact
                              </NavLink>
                            </li>
                          </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

</>
  )
}

export default Header