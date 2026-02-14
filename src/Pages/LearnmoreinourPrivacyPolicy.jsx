import React from 'react';
import { Link } from 'react-router-dom';
import './LearnmoreinourPrivacyPolicy.css';

const LearnmoreinourPrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <section className="privacy-hero">
        <div className="hero-inner">
          <h1>Privacy Policy</h1>
          <div className="update-date">Last updated: February 14, 2026</div>
        </div>
      </section>

      <div className="privacy-main-content">
        <div className="content-box">

          <p className="lead-text">
            At <span className="brand-name">Level Up</span>, your privacy matters to us.  
            This policy explains what information we collect, how we use it, and how we protect it.
          </p>

          <div className="policy-section">
            <h2>1. What information do we collect?</h2>
            <ul>
              <li>Name, email address, phone number, delivery & billing address</li>
              <li>Payment details (processed securely — we do not store full card info)</li>
              <li>Device & browser information (IP address, OS, browser type)</li>
              <li>Shopping behavior (products viewed, added to cart, wishlist, searches)</li>
              <li>Cookies & similar technologies (see section 4)</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>2. How do we use your information?</h2>
            <ul>
              <li>To process your orders and send shipping updates</li>
              <li>To provide customer support when you contact us</li>
              <li>To send order confirmations, promotions & newsletters (you can unsubscribe)</li>
              <li>To improve website performance and user experience</li>
              <li>To detect & prevent fraud</li>
              <li>To comply with legal requirements</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. Cookies & Tracking Technologies</h2>
            <p>
              We use cookies to make the site work properly and to understand how people use it.
            </p>
            <div className="cookie-categories">
              <strong>Main types we use:</strong>
              <ul>
                <li><strong>Necessary</strong> — required for cart, login, checkout</li>
                <li><strong>Analytics</strong> — site usage statistics (Google Analytics etc.)</li>
                <li><strong>Preference</strong> — remember dark/light mode, language, etc.</li>
                <li><strong>Marketing</strong> — show relevant ads & retargeting</li>
              </ul>
            </div>
            <p>
              You can manage or disable most cookies via your browser settings.  
              Turning off some cookies may affect how the website works.
            </p>
          </div>

          <div className="policy-section">
            <h2>4. Do we share your information?</h2>
            <p>We do <strong>not</strong> sell your personal data.</p>
            <p>We share information only with:</p>
            <ul>
              <li>Payment gateways (Razorpay, Stripe, etc.)</li>
              <li>Shipping partners (Delhivery, DTDC, Blue Dart, etc.)</li>
              <li>Analytics & marketing tools (with anonymized / aggregated data when possible)</li>
              <li>Government / law enforcement when legally required</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>5. How long do we keep your data?</h2>
            <p>
              We keep order & account data for as long as needed for legal, tax and accounting purposes  
              (usually 5–7 years in India). Marketing consent can be withdrawn anytime.
            </p>
          </div>

          <div className="policy-section">
            <h2>6. Your rights</h2>
            <ul>
              <li>Access your personal data we hold</li>
              <li>Request correction of incorrect information</li>
              <li>Request deletion (subject to legal retention requirements)</li>
              <li>Withdraw consent for marketing emails / cookies</li>
              <li>Object to certain types of processing</li>
            </ul>
            <p className="contact-line">
              To exercise these rights, email us at:  
              <a href="mailto:support@levelup.store">support@levelup.store</a>
            </p>
          </div>

          <div className="policy-section last-section">
            <h2>7. Contact Us</h2>
            <p>
              If you have questions about this policy or your data, please reach out:<br />
              Email: <a href="mailto:support@levelup.store">support@levelup.store</a><br />
              WhatsApp: +91 - 9876543210 (Althan,Surat, Gujarat)
            </p>
          </div>

          <div className="back-home-wrapper">
            <Link to="/" className="back-home-btn">
              ← Back to Home 
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LearnmoreinourPrivacyPolicy;