import React, { useState, useEffect } from 'react';
import './Checkout.css';

const getCart = () => {
  const saved = localStorage.getItem('xlevelup_cart');
  return saved ? JSON.parse(saved) : [];
};

const Checkout = () => {
  const [cart, setCart] = useState(getCart());
  const [paymentMethod, setPaymentMethod] = useState('cod'); 
  const [codFee] = useState(99); 
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: 'Gujarat',
    pincode: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (cart.length === 0) {
      
      alert('Your cart is empty. Add items first!');
    }
  }, [cart]);

  const subtotal = cart.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return sum + priceNum * (item.quantity || 1);
  }, 0);

  const shipping = subtotal > 0 ? 499 : 0;
  const total = subtotal + shipping + (paymentMethod === 'cod' ? codFee : 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = 'Enter valid 10-digit phone';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.pincode.match(/^\d{6}$/)) newErrors.pincode = 'Enter valid 6-digit PIN';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    
    alert(
      `Order placed successfully!\n\n` +
      `Payment Method: ${paymentMethod.toUpperCase()}\n` +
      `Total: ₹${total.toFixed(2)}\n` +
      `Shipping to: ${formData.fullName}, ${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}\n\n` +
      `Thank you for shopping at Nike X LevelUP!`
    );

    
    localStorage.removeItem('xlevelup_cart');
    setCart([]);
    
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <div className="empty-message">
          <h2>Your Cart Is Empty</h2>
          <a href="/shop" className="btn-shop">Continue Shopping</a>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <section className="checkout-hero">
        <h1>Checkout</h1>
        <p>Complete Your Order For Premium Sneakers</p>
      </section>

      <div className="checkout-container">
        <div className="checkout-grid">
          
          <div className="checkout-left">
            <div className="form-card">
              <h2>Shipping Address</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? 'input-error' : ''}
                    placeholder="Admin KAKA"
                  />
                  {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'input-error' : ''}
                    placeholder="9876543210"
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                    placeholder="Admin123@gmail.com"
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={errors.address ? 'input-error' : ''}
                    placeholder="House no, Street, Area , Landmark , ETC........"
                  />
                  {errors.address && <span className="error-text">{errors.address}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={errors.city ? 'input-error' : ''}
                      placeholder="Surat"
                    />
                    {errors.city && <span className="error-text">{errors.city}</span>}
                  </div>

                  <div className="form-group half">
                    <label>State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Gujarat"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>PIN Code</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className={errors.pincode ? 'input-error' : ''}
                    placeholder="22446688"
                  />
                  {errors.pincode && <span className="error-text">{errors.pincode}</span>}
                </div>

                
                <h2>Payment Method</h2>
                <div className="payment-options">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                    />
                    <span>Credit / Debit Card</span>
                  </label>

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                    />
                    <span>UPI / Online Payment (Google Pay, PhonePe, Paytm etc.)</span>
                  </label>

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                    />
                    <span>Cash on Delivery {codFee > 0 && `(Extra ₹${codFee})`}</span>
                  </label>
                </div>

                
                {paymentMethod === 'card' && (
                  <div className="card-details">
                    <div className="form-group">
                      <label>Card Number</label>
                      <input type="text" placeholder="1234 5678 9012 3456" maxLength={19} />
                    </div>
                    <div className="form-row">
                      <div className="form-group half">
                        <label>Expiry (MM/YY)</label>
                        <input type="text" placeholder="MM/YY" maxLength={5} />
                      </div>
                      <div className="form-group half">
                        <label>CVV</label>
                        <input type="text" placeholder="123" maxLength={4} />
                      </div>
                    </div>
                    <p className="note">We use secure payment gateway (Razorpay/PayU). Your card details are safe.</p>
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <p className="note">You will be redirected to UPI app to complete payment.</p>
                )}

                {paymentMethod === 'cod' && (
                  <p className="note">Pay ₹{total.toFixed(2)} in cash when your order arrives. COD fee ₹{codFee} included.</p>
                )}

                <button type="submit" className="btn-pay">
                  Pay ₹{total.toFixed(2)} • Place Order
                </button>
              </form>
            </div>
          </div>

          
          <div className="checkout-right">
            <div className="summary-card">
              <h2>Order Summary</h2>
              {cart.map((item) => (
                <div key={item.id} className="summary-item">
                  <div className="item-info">
                    <span>{item.name} × {item.quantity || 1}</span>
                    <span className="price">₹{(parseFloat(item.price.replace(/[^0-9.]/g, '')) * (item.quantity || 1)).toFixed(2)}</span>
                  </div>
                </div>
              ))}

              <div className="summary-line">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-line">
                <span>Shipping</span>
                <span>₹{shipping.toFixed(2)}</span>
              </div>
              {paymentMethod === 'cod' && (
                <div className="summary-line">
                  <span>COD Fee</span>
                  <span>₹{codFee.toFixed(2)}</span>
                </div>
              )}
              <div className="summary-line total">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>

              <p className="summary-note">
                Taxes included • Secure checkout • Estimated delivery in 3-7 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;