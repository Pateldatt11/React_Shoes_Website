import React, { useState, useEffect } from 'react';
import './Account.css';

const Account = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const [user, setUser] = useState(null);
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'signup') {
      setSignupData((prev) => ({ ...prev, [name]: value }));
    } else {
      setLoginData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateSignup = () => {
    let newErrors = {};
    if (!signupData.name) newErrors.name = 'Name is required';
    if (!signupData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(signupData.email)) newErrors.email = 'Invalid email';
    if (!signupData.password) newErrors.password = 'Password is required';
    if (signupData.password !== signupData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateLogin = () => {
    let newErrors = {};
    if (!loginData.email) newErrors.email = 'Email is required';
    if (!loginData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (validateSignup()) {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      if (storedUsers.find((u) => u.email === signupData.email)) {
        setErrors({ email: 'Email already exists' });
        return;
      }
      const newUser = { name: signupData.name, email: signupData.email, password: signupData.password };
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      setActiveTab('login');
      setSignupData({ name: '', email: '', password: '', confirmPassword: '' });
      setErrors({});
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const foundUser = storedUsers.find((u) => u.email === loginData.email && u.password === loginData.password);
      if (foundUser) {
        const loggedUser = { name: foundUser.name, email: foundUser.email };
        setUser(loggedUser);
        localStorage.setItem('user', JSON.stringify(loggedUser));
        setLoginData({ email: '', password: '' });
        setErrors({});
      } else {
        setErrors({ general: 'Invalid email or password' });
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  if (user) {
    return (
      <div className="account-page">
        <div className="account-hero">
          <h1>Welcome Back</h1>
          <p>Your profile details</p>
        </div>
        <div className="account-container">
          <div className="account-card">
            <div className="success-message">
              <div className="success-icon">👤</div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <button className="btn-create-account" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="account-page">
      <div className="account-hero">
        <h1>Account</h1>
        <p>Create an account or log in to continue</p>
      </div>
      <div className="account-container">
        <div className="account-card">
          <div className="tabs">
            <button
              className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
            <button
              className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
          </div>
          <div className="form-wrapper">
            <div className={`slider ${activeTab === 'signup' ? 'signup-active' : 'login-active'}`}>
              <div className="form-container">
                <form className="account-form" onSubmit={handleSignupSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={signupData.name}
                      onChange={(e) => handleInputChange(e, 'signup')}
                      className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <div className="error-text">{errors.name}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={signupData.email}
                      onChange={(e) => handleInputChange(e, 'signup')}
                      className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <div className="error-text">{errors.email}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={signupData.password}
                      onChange={(e) => handleInputChange(e, 'signup')}
                      className={errors.password ? 'input-error' : ''}
                    />
                    {errors.password && <div className="error-text">{errors.password}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={signupData.confirmPassword}
                      onChange={(e) => handleInputChange(e, 'signup')}
                      className={errors.confirmPassword ? 'input-error' : ''}
                    />
                    {errors.confirmPassword && <div className="error-text">{errors.confirmPassword}</div>}
                  </div>
                  <button type="submit" className="btn-create-account">
                    Create Account
                  </button>
                </form>
                <div className="form-footer">
                  Already have an account? <a onClick={() => setActiveTab('login')}>Log in</a>
                </div>
              </div>
              <div className="form-container">
                <form className="account-form" onSubmit={handleLoginSubmit}>
                  {errors.general && (
                    <div className="error-text" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                      {errors.general}
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="login-email">Email</label>
                    <input
                      type="email"
                      id="login-email"
                      name="email"
                      value={loginData.email}
                      onChange={(e) => handleInputChange(e, 'login')}
                      className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <div className="error-text">{errors.email}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="login-password">Password</label>
                    <input
                      type="password"
                      id="login-password"
                      name="password"
                      value={loginData.password}
                      onChange={(e) => handleInputChange(e, 'login')}
                      className={errors.password ? 'input-error' : ''}
                    />
                    {errors.password && <div className="error-text">{errors.password}</div>}
                  </div>
                  <button type="submit" className="btn-create-account">
                    Log In
                  </button>
                </form>
                <div className="form-footer">
                  Don't have an account? <a onClick={() => setActiveTab('signup')}>Sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;