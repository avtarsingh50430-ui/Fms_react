import React from 'react'

const Footer = () => {
  return (
   
    <><footer className="footer">
  <div className="container">
    <div className="footer-bg">
      <div className="container footer-section">
        <div className="footer-area">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 ">
              <div className="logo-footer">
                <a href="#">
                  <img src="images/logo.png" alt="" />{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 ">
              <div className="navigation-footer">
                <div className="row">
                  <div className="col-md-4">
                    <div className="address-link">
                      <h4>Address</h4>
                      <ul className="adres-list">
                        <li>33 Sir Jacobs Crescent, Brampton, ON L7A 3V2</li>
                        <li>Phone: +16472415999</li>
                        <li>Isoviafreightmanagement@gmail.com</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="social-media-links">
                      <ul className="social-links">
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="software-links">
                      <div className="software-links-list ">
                        <ul className="list-software">
                          <h4>Softwares</h4>
                          <a href="#">
                            <li className="software-1">
                              Isovia Freight Management System
                            </li>
                          </a>
                          <a href="#">
                            <li>Isovia Fleet Management System</li>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="navigation-icons">
            <ul className="list-navigation">
              <li className="navigation-footer">
                <a href="#">Home</a>
              </li>
              <li className="navigation-footer">
                <a href="#">About</a>
              </li>
              <li className="navigation-footer">
                <a href="#">Login</a>
              </li>
              <li className="navigation-footer">
                <a href="#">Register</a>
              </li>
              <li className="navigation-footer">
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <span className="footer-copyright">
              Copyright © 2025 ISOVIA Technology Solutions Inc. All Rights
              Reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
</>
  )
}

export default Footer