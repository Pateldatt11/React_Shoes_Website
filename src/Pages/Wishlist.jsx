import React, { useState, useEffect } from 'react';
import './Wishlist.css';

const getWishlist = () => {
  const saved = localStorage.getItem('xlevelup_wishlist');
  return saved ? JSON.parse(saved) : [];
};

const saveWishlist = (items) => {
  localStorage.setItem('xlevelup_wishlist', JSON.stringify(items));
};

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(getWishlist());

  useEffect(() => {
    saveWishlist(wishlist);
  }, [wishlist]);

  const removeItem = (id) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  const moveToCart = (id) => {
    const item = wishlist.find(i => i.id === id);
    if (item) {
      
      const cart = JSON.parse(localStorage.getItem('xlevelup_cart') || '[]');
      const existing = cart.find(i => i.id === id);
      
      let updatedCart;
      if (existing) {
        updatedCart = cart.map(i =>
          i.id === id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      } else {
        updatedCart = [...cart, { ...item, quantity: 1 }];
      }
      
      localStorage.setItem('xlevelup_cart', JSON.stringify(updatedCart));
      
         
      removeItem(id);
      alert(`"${item.name}" moved to cart!`);
    }
  };

  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear your wishlist?")) {
      setWishlist([]);
    }
  };

  return (
    <div className="wishlist-page">
      <section className="wishlist-hero">
        <h1>Your Wishlist</h1>
        <p>Save your favorite sneakers here and never miss a drop.</p>
      </section>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <div className="empty-heart">♡</div>
          <h2>Your wishlist is empty</h2>
          <p>Start adding some fire sneakers!</p>
          <a href="/shop" className="browse-shop-btn">
            Browse Shop
          </a>
        </div>
      ) : (
        <>
          <div className="wishlist-controls">
            <button className="clear-all-btn" onClick={clearAll}>
              Clear Wishlist
            </button>
          </div>

          <section className="wishlist-content">
            <div className="wishlist-grid">
              {wishlist.map((item) => (
                <div className="wishlist-item" key={item.id}>
                  <div className="item-preview">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      loading="lazy" 
                    />
                  </div>

                  <div className="item-details">
                    <h3>{item.name}</h3>
                    {item.color && <p className="variant">{item.color}</p>}
                    <p className="price">{item.price}</p>

                    <div className="item-buttons">
                      <button 
                        className="btn-move-cart"
                        onClick={() => moveToCart(item.id)}
                      >
                        Move to Cart
                      </button>
                      <button 
                        className="btn-remove"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Wishlist;