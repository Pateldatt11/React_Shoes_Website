import React from 'react';
import './PrivacyPolicy.css';  

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: February 14, 2026</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Nike X LevelUP Shoes ("we", "us", "our"). We are committed to protecting your privacy and ensuring that your personal information is handled responsibly and in accordance with applicable laws, including the Digital Personal Data Protection Act, 2023 (DPDPA) and rules thereunder in India.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, store, and protect your personal data when you visit our website [yourdomain.com], create an account, place orders, or interact with our services.
          </p>
          <p>
            By using our website or services, you consent to the practices described in this policy. If you do not agree, please do not use our site.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of personal data:</p>
          <ul>
            <li><strong>Personal Identifiers:</strong> Name, email address, phone number, billing/shipping address.</li>
            <li><strong>Payment Information:</strong> We do not store full card details; payments are processed securely via third-party gateways (e.g., Razorpay, PayU, etc.).</li>
            <li><strong>Order & Transaction Data:</strong> Products purchased, order history, preferences.</li>
            <li><strong>Device & Usage Data:</strong> IP address, browser type, device information, pages visited, time spent, cookies & similar technologies.</li>
            <li><strong>Communication Data:</strong> Messages, reviews, support tickets, newsletter subscriptions.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Collect Your Information</h2>
          <ul>
            <li>Directly from you (when you register, place orders, contact us, subscribe).</li>
            <li>Automatically via cookies, pixels, analytics tools (Google Analytics, etc.).</li>
            <li>From third parties (payment processors, delivery partners, social logins if enabled).</li>
          </ul>
        </section>

        <section>
          <h2>4. How We Use Your Information</h2>
          <p>We use your personal data for the following purposes:</p>
          <ul>
            <li>To process orders, fulfill deliveries, handle payments and refunds.</li>
            <li>To create and manage your account.</li>
            <li>To communicate order updates, promotions, newsletters (with consent).</li>
            <li>To improve our website, products, and customer service.</li>
            <li>To prevent fraud, enforce our terms, comply with legal obligations.</li>
            <li>For analytics and personalized recommendations (where you have consented).</li>
          </ul>
        </section>

        <section>
          <h2>5. Sharing of Your Information</h2>
          <p>We may share your data with:</p>
          <ul>
            <li>Service providers (logistics/delivery partners like Delhivery, BlueDart; payment gateways; cloud hosting).</li>
            <li>Legal authorities when required by law or court order.</li>
            <li>Business partners only with your explicit consent.</li>
          </ul>
          <p>We do not sell your personal data to third parties for marketing purposes.</p>
        </section>

        <section>
          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
          </p>
          <p>
            For inactive accounts (no login/activity for 3 years), we may erase data as per DPDPA Rules 2025 requirements for e-commerce entities (except minimal data needed for account reactivation or virtual tokens).
          </p>
        </section>

        <section>
          <h2>7. Your Rights (Data Principal Rights under DPDPA)</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access, correct, or update your personal data.</li>
            <li>Withdraw consent (where processing is consent-based).</li>
            <li>Request erasure of your data (subject to legal retention requirements).</li>
            <li>Nominate a representative in case of death/incapacity.</li>
            <li>Grieve any violation (contact our Grievance Officer below).</li>
          </ul>
          <p>To exercise these rights, email us at [support@yourdomain.com]. We will respond within the timelines prescribed under law.</p>
        </section>

        <section>
          <h2>8. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies for essential functions, analytics, and marketing (with consent where required). You can manage cookie preferences via your browser settings or our cookie banner.
          </p>
        </section>

        <section>
          <h2>9. Security</h2>
          <p>
            We implement reasonable technical and organizational measures to protect your data from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2>10. International Transfers</h2>
          <p>
            If data is transferred outside India, we ensure appropriate safeguards are in place as required under Indian law.
          </p>
        </section>

        <section>
          <h2>11. Children's Privacy</h2>
          <p>
            Our services are not intended for children under 18 years. We do not knowingly collect data from minors without verifiable parental consent.
          </p>
        </section>

        <section>
          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted here with an updated "Last Updated" date. Continued use of the site after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2>13. Grievance Officer / Contact Us</h2>
          <p>
            For any privacy-related queries or complaints:
          </p>
          <p>
            <strong>Grievance Officer:</strong> [Patel Datt / Design By LeveLUP Team]<br />
            Email: [Supportlevelup@gmail.com] or [Nikexlevelupshoes@gmail.com]<br />
            Phone: [+91-9876543210]<br />
            Address: [Altthan, Surat, Gujarat, India]
          </p>
          <p>
            We will address your grievance within the time limits prescribed under the DPDPA and Rules.
          </p>
        </section>

        <p className="thank-you">
          Thank you for trusting Nike X LevelUP Shoes with your information.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;