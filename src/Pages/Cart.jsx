import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const getCart = () => {
  const saved = localStorage.getItem('xlevelup_cart');
  return saved ? JSON.parse(saved) : [];
};

const saveCart = (items) => {
  localStorage.setItem('xlevelup_cart', JSON.stringify(items));
};

const Cart = () => {
  const [cart, setCart] = useState(getCart());
  const navigate = useNavigate();

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
          : item
      )
    );
  };

  const clearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      setCart([]);
    }
  };

  const subtotal = cart.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return sum + priceNum * (item.quantity || 1);
  }, 0);

  const shipping = subtotal > 0 ? 499 : 0;
  const total = subtotal + shipping;

  const handleProceedToCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <section className="cart-hero">
        <h1>Your Cart</h1>
        <p>Ready to checkout your selected sneakers?</p>
      </section>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-bag">🛍️</div>
          <h2>Your cart is empty</h2>
          <p>Add some sneakers to get started!</p>
          <a href="/shop" className="browse-shop-btn">
            Start Shopping
          </a>
        </div>
      ) : (
        <>
          <div className="cart-controls">
            <button className="clear-all-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>

          <section className="cart-content">
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="item-preview">
                    <img src={item.img} alt={item.name} loading="lazy" />
                  </div>

                  <div className="item-details">
                    <h3>{item.name}</h3>
                    {item.color && <p className="variant">{item.color}</p>}
                    <p className="price">{item.price}</p>

                    <div className="quantity-control">
                      <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                      <span>{item.quantity || 1}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>

                    <button 
                      className="btn-remove"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-card">
                <h3>Order Summary</h3>
                <div className="summary-line">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-line">
                  <span>Shipping</span>
                  <span>₹{shipping.toFixed(2)}</span>
                </div>
                <div className="summary-line total">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>

                <button 
                  className="btn-checkout"
                  onClick={handleProceedToCheckout}
                >
                  Proceed to Checkout
                </button>

                <p className="summary-note">
                  Taxes and discounts calculated at checkout
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Cart;