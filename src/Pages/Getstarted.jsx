import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <div className="getstarted-page">
      <div className="getstarted-overlay"></div>
      
      <div className="getstarted-content">
        <section className="hero-section">
          <h1>Level Up Your Game</h1>
          <p className="tagline">
            Join the squad. Get exclusive drops, early access, and member-only deals on the freshest sneakers.
          </p>
        </section>

        <div className="action-buttons">
          <a href="/Account" className="btn-primary">
            Create Account
          </a>
          <a href="/Account" className="btn-secondary">
            Already have an account? Sign In
          </a>
        </div>

        <div className="benefits">
          <div className="benefit-item">
            <span className="benefit-icon">⚡</span>
            <p>Early access to limited drops</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🔥</span>
            <p>Exclusive member discounts</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🚚</span>
            <p>Free shipping on first order</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🛡️</span>
            <p>Secure checkout & easy returns</p>
          </div>
        </div>

        <p className="small-note">
          By signing up, you agree to our <a href="/TermsAndConditions">Terms of Service</a> and <a href="/PrivacyPolicy">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default GetStarted;