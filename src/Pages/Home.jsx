import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {

    const cookieChoice = localStorage.getItem('cookiesAccepted');
    if (cookieChoice === null) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookieBanner(false);
    
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowCookieBanner(false);
    
  };

  const handleShopNow = () => navigate('/shop');
  const handleLatestDrops = () => navigate('/sale');
  const handleShopSale = () => navigate('/sale');

  return (
    <div className="home-page">
      
      <section className="hero">
        <div className="hero-content">
          <h1>
            Level Up Your <span className="accent">Style</span>
          </h1>
          <p>Premium Sneakers. Streetwear Drops. Limited Editions.</p>
          <div className="hero-cta">
            <button className="primary-btn" onClick={handleShopNow}>
              Shop Now
            </button>
            <button className="secondary-btn" onClick={handleLatestDrops}>
              Latest Drops
            </button>
          </div>
        </div>
        <div className="hero-bg-overlay"></div>
      </section>

      
      <section className="sale-banner">
        <div className="sale-content">
          <h2>End of Season Sale</h2>
          <p>
            Up to <span className="highlight">50% OFF</span> on selected styles
          </p>
          <button className="sale-btn" onClick={handleShopSale}>
            Shop Sale
          </button>
        </div>
      </section>

      
      <section className="trust-bar">
        <div className="trust-item">
          <span className="number">10K+</span>
          <span className="label">Happy Customers</span>
        </div>
        <div className="trust-item">
          <span className="number">100%</span>
          <span className="label">Authentic Products</span>
        </div>
        <div className="trust-item">
          <span className="number">Free</span>
          <span className="label">Shipping on ₹5,000+</span>
        </div>
      </section>

     
      {showCookieBanner && (
        <div className="cookie-consent" role="alert" aria-live="polite">
          <div className="cookie-content">
            <p>
              We use cookies to enhance your experience, analyze site usage, and
              deliver personalized content. Continuing to use our site means you
              accept our use of cookies.
              <br />
              <Link to="/LearnmoreinourPrivacyPolicy" className="cookie-link">
                Learn more in our Privacy Policy
              </Link>
            </p>

            <div className="cookie-buttons">
              <button
                type="button"
                className="cookie-btn decline"
                onClick={handleDeclineCookies}
              >
                Decline
              </button>
              <button
                type="button"
                className="cookie-btn accept"
                onClick={handleAcceptCookies}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;