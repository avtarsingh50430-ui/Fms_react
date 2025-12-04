import React from 'react'

const IsoviaFreightManagementSystem = () => {
  return (
   <>
  <section className="software-bg-banner">
    <div className="software-bg-container">
      <div className="container">
        <div className="software-1-text">
          <h2>Isovia Freight Management System</h2>
        </div>
        <div className="scrol-down-button">
          <a href="#">
            <span> Scroll Down </span>
            <i className="fa-solid fa-angles-down" />
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="software-1-description-section">
    <div className="container">
      <div className="software-1-description-section-textarea">
        <div className="software-1-description-section-textarea-title">
          <h4>Isovia Freight Management System (IFMS)</h4>
        </div>
        <div className="target-audience-section">
          <div className="target-audience-section-textarea">
            <div className="target-audience-section-textarea-title">
              <h5>Target Audience:</h5>
              <p>
                Freight brokers, logistics companies, and small-to-medium
                businesses handling freight.
              </p>
            </div>
          </div>
        </div>
        <div className="key-points-section">
          <div className="key-points-section-textarea">
            <div className="key-points-section-textarea-title">
              <ul className="list-keypoints-software">
                <a href="#">
                  <li className="list-software-item-1">
                    <span>Efficiency Boost:</span>
                    Highlight how the system optimizes freight operations with
                    AI-powered insights.
                  </li>
                </a>
                <a href="#">
                  <li className="list-software-item-1">
                    <span>Cost Reduction:</span>
                    Highlight how the system optimizes freight operations with
                    AI-powered insights.
                  </li>
                </a>
                <a href="#">
                  <li className="list-software-item-1">
                    <span>Real-Time Visibility:</span>Emphasize the GPS tracking
                    and live updates for customer and stakeholder peace of mind.
                  </li>
                </a>
                <a href="#">
                  <li className="list-software-item-1">
                    <span>Regulatory Compliance:</span>Focus on tools that
                    simplify adhering to complex transportation regulations.
                  </li>
                </a>
                <a href="#">
                  <li className="list-software-item-1">
                    <span>User-Friendly Interface:</span> Promote the intuitive
                    design that enables quick onboarding and usage.
                  </li>
                </a>
                <a href="#">
                  <li className="list-software-item-1">
                    <span>Scalability:</span>Market the adaptability of the
                    system for both small businesses and large enterprises.
                  </li>
                </a>
                <a href="#">
                  <li className="list-software-item-1">
                    <span>Integration with Industry Leaders:</span>
                    Highlight partnerships with Trimble, Samsara, and FMCSA for
                    added functionality.
                  </li>
                </a>
                <a href="#">
                  <li className="list-software-item-1">
                    <span>Subscription Flexibility:</span>Offer different
                    pricing tiers to cater to various customer needs and
                    budgets.
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <button className="demo-btn" id="openPopup">
          Get Free Demo
        </button>
        {/* Popup Overlay */}
        <div className="overlay" id="popupOverlay">
          <div className="popup">
            <button className="close-btn" id="closePopup">
              Close
            </button>
            <h2>Get Free Demo</h2>
            <h3>Or Call Us At +1 647-241-5999</h3>
            <form>
              <input type="text" placeholder="Company" required="" />
              <input type="text" placeholder="Your Name" required="" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "4%"
                }}
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="half"
                  required=""
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="half"
                  required=""
                />
              </div>
              <textarea rows={3} placeholder="Your Message" defaultValue={""} />
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default IsoviaFreightManagementSystem