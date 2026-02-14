import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';         
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import './Nav.css';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          Nike Shoes X LeveLUP
        </div>

        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/sneakers">Sneakers</Link></li>
          <li><Link to="/sale">Sale</Link></li>
        </ul>

       
        <div className="nav-actions">
          <Link to="/search" className="action-btn" aria-label="Search">
            <Search size={20} strokeWidth={2.2} />
          </Link>

         
          <Link to="/wishlist" className="action-btn" aria-label="Wishlist">
            <Heart size={20} strokeWidth={2.2} />
          </Link>

          <Link to="/Cart" className="action-btn" aria-label="Cart">
            <ShoppingCart size={20} strokeWidth={2.2} />
          </Link>

          <Link to="/account" className="action-btn" aria-label="Account">
            <User size={20} strokeWidth={2.2} />
          </Link>

          <Link to="/getstarted" className="cta-button">Get Started</Link>

          <button 
            className="menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-header">
            <div className="logo">X LeveLUP</div>
            <button className="close-btn" onClick={toggleMobileMenu}>
              <X size={28} />
            </button>
          </div>

          <ul className="mobile-links">
            <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
            <li><Link to="/aboutus" onClick={toggleMobileMenu}>About Us</Link></li>
            <li><Link to="/shop" onClick={toggleMobileMenu}>Shop</Link></li>
            <li><Link to="/sneakers" onClick={toggleMobileMenu}>Sneakers</Link></li>
            <li><Link to="/sale" onClick={toggleMobileMenu}>Sale</Link></li>
            
            <li><Link to="/wishlist" onClick={toggleMobileMenu}>Wishlist</Link></li>
          </ul>

          <div className="mobile-actions">
            <button className="mobile-cta" onClick={toggleMobileMenu}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;