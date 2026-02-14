import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
     
      <section className="about-hero">
        <div className="hero-content">
          <h1>
            We Are <span className="accent">Nike Shoes X LeveLUP</span>
          </h1>
          <p className="tagline">
            Where Street Culture Meets Premium Kicks
          </p>
        </div>
      </section>

      
      <section className="section story">
        <div className="content-wrapper">
          <div className="text-block">
            <h2>Our Story</h2>
            <p>
              Founded in Surat, Gujarat in 2023,Nike Shoes X LeveLUP started as a passion project among sneakerheads who were tired of limited access to authentic, limited-edition drops in India.
            </p>
            <p>
              Today, we’ve grown into one of the most trusted destinations for premium sneakers, streetwear, and exclusive collaborations — delivering global heat straight to your doorstep with 100% authenticity guaranteed.
            </p>
          </div>

          <div className="image-block">
            <img 
              src="https://media.gq-magazine.co.uk/photos/62ffa252115d9e333d336aab/16:9/w_2560%2Cc_limit/nike-lede-full.jpg" 
              alt="Premium sneaker collection display" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

     

    </div>
  );
};

export default AboutUs;