import React from 'react';
import './TermAndCondition.css'; 

const TermAndCondition = () => {
  return (
    <div className="terms-page" style={{ background: '#0a0a0a', color: '#f8f8f8', minHeight: '100vh', padding: '120px 5vw 60px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '2rem' }}>
          Terms And Conditions
        </h1>

        <p style={{ textAlign: 'center', color: '#ddd', marginBottom: '3rem' }}>
          Last Updated: February 14, 2026
        </p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Nike X LevelUP Shoes ("we", "us", "our"). These Terms and Conditions ("Terms") govern your access to and use of our website [yourdomain.com] (the "Site") and the purchase of products offered on the Site.
          </p>
          <p>
            By accessing or using the Site, or by placing an order, you agree to be bound by these Terms. If you do not agree, please do not use the Site.
          </p>
          <p>
            We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date.
          </p>
        </section>

        <section>
          <h2>2. Use of the Website</h2>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.7' }}>
            <li>You must be at least 18 years old or have parental/guardian consent to use this Site.</li>
            <li>You agree not to use the Site for any illegal purpose or in violation of any laws.</li>
            <li>We grant you a limited, non-exclusive, non-transferable license to access and use the Site for personal, non-commercial purposes.</li>
            <li>All content (images, text, logos, designs) is our property or licensed to us. You may not copy, reproduce, or distribute without permission.</li>
          </ul>
        </section>

        <section>
          <h2>3. Products and Orders</h2>
          <p>
            All products displayed are subject to availability. We reserve the right to discontinue any product at any time.
          </p>
          <p>
            Prices are in INR and include applicable taxes unless stated otherwise. We reserve the right to correct any pricing errors.
          </p>
          <p>
            Placing an order constitutes an offer to purchase. We will send a confirmation email once the order is accepted.
          </p>
        </section>

        <section>
          <h2>4. Payment</h2>
          <p>
            We accept payments via [list methods: Credit/Debit Cards, UPI, Net Banking, Cash on Delivery (COD), etc.].
          </p>
          <p>
            All payments are processed securely. You confirm that the payment method used belongs to you.
          </p>
          <p>
            In case of COD, additional charges may apply in some areas.
          </p>
        </section>

        <section>
          <h2>5. Shipping and Delivery</h2>
          <p>
            We ship across India. Delivery times are estimated [3-7 business days] depending on location.
          </p>
          <p>
            Shipping charges will be displayed at checkout. Free shipping may apply on orders above ₹[amount].
          </p>
          <p>
            We are not responsible for delays due to force majeure events (natural disasters, strikes, etc.).
          </p>
        </section>

        <section>
          <h2>6. Returns, Refunds and Exchanges</h2>
          <p>
            We offer returns within [7/10/15] days of delivery if the product is unused, in original packaging, and with all tags intact.
          </p>
          <p>
            Refunds will be processed to the original payment method within [7-10] business days after receiving the returned item.
          </p>
          <p>
            Size exchange is allowed (subject to stock availability). Return shipping charges may apply unless the product is defective/damaged.
          </p>
          <p>
            Defective/damaged/wrong items must be reported within [48 hours/3 days] with photos.
          </p>
        </section>

        <section>
          <h2>7. Warranty and Liability</h2>
          <p>
            Products carry manufacturer warranty where applicable. We do not provide additional warranty unless stated.
          </p>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages.
          </p>
        </section>

        <section>
          <h2>8. Intellectual Property</h2>
          <p>
            All trademarks, logos, and content are owned by us or our licensors. Unauthorized use is prohibited.
          </p>
        </section>

        <section>
          <h2>9. Governing Law and Jurisdiction</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Surat, Gujarat.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>
            For any questions regarding these Terms, contact us at:
          </p>
          <p>
            Email: [Nikexlevelupshoes@gmail.com]<br />
            Phone: [+91-9876543210]<br />
            Address: [Althan, Surat, Gujarat, India]
          </p>
        </section>

        <p style={{ marginTop: '3rem', textAlign: 'center', color: '#aaa' }}>
          Thank you for shopping with Nike X LevelUP Shoes!
        </p>
      </div>
    </div>
  );
};

export default TermAndCondition;