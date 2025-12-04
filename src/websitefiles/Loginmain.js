import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Loginmain = () => {
  const [activeCard, setActiveCard] = useState('ifm');

  const loginCards = [
    {
      id: 'ifm',
      title: 'IFM Login',
      subtitle: 'Isovia Freight Management',
      status: 'active',
      description: 'Access your freight management dashboard',
      link: '/alllogin'
    },
    {
      id: 'ilb',
      title: 'ILB Login',
      subtitle: 'Isovia Load Board',
      status: 'coming-soon',
      description: 'Coming Soon - Load board platform for carriers and shippers',
      link: '#'
    },
    {
      id: 'driver',
      title: 'Driver App',
      subtitle: 'Mobile Driver Application',
      status: 'coming-soon',
      description: 'Coming Soon - Mobile app for drivers on the road',
      link: '#'
    }
  ];

  const handleCardClick = (card, e) => {
    if (card.status !== 'active') {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section className="login-card-section" id="login-bg">
      <div className="container">
        <h1 className="login-title">Login</h1>
        
        <div className="row login-sections">
          {loginCards.map((card) => (
            <div key={card.id} className="col-md-4 mb-4">
              <NavLink
                to={card.status === 'active' ? card.link : '#'}
                className={({ isActive }) => 
                  `login-card text-center main-login-hover ${
                    card.status === 'active' ? 'active' : 'coming-soon'
                  } ${activeCard === card.id ? 'highlighted' : ''} ${
                    isActive ? 'navlink-active' : ''
                  }`
                }
                onClick={(e) => handleCardClick(card, e)}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard('ifm')}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div className="card-icon">
                  {card.status === 'active' ? (
                    <i className="fas fa-sign-in-alt"></i>
                  ) : (
                    <i className="fas fa-clock"></i>
                  )}
                </div>
                
                <h3>{card.title}</h3>
                <p className="card-subtitle">{card.subtitle}</p>
                <p className="card-description">{card.description}</p>
                
                {card.status === 'active' ? (
                  <div className="card-badge active-badge">
                    <span>Available</span>
                  </div>
                ) : (
                  <div className="card-badge coming-soon-badge">
                    <span>Coming Soon</span>
                  </div>
                )}
                
                <div className="card-action">
                  {card.status === 'active' ? (
                    <button className="btn btn-primary login-btn">
                      Login Now <i className="fas fa-arrow-right"></i>
                    </button>
                  ) : (
                    <button className="btn btn-secondary coming-soon-btn" disabled>
                      Notify Me <i className="fas fa-bell"></i>
                    </button>
                  )}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loginmain;