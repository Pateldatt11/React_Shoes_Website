import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import AboutUs from './Pages/AboutUS';
import Shop from './Pages/Shop';
import Sneakers from './Pages/Sneakers';
import Sale from './Pages/Sale';
import Search from './Pages/Search';
import Home from './Pages/Home';
import './App.css';
import Wishlist from './Pages/Wishlist';
import Cart from './Pages/Cart';
import Account from './Pages/Account';
import GetStarted from './Pages/getstarted';
import TermsAndConditions from './Pages/TermAndCondition';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Checkout from './Pages/Checkout';
import LearnmoreinourPrivacyPolicy from './Pages/LearnmoreinourPrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      
      

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/search" element={<Search />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/account" element={<Account />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/LearnmoreinourPrivacyPolicy" element={<LearnmoreinourPrivacyPolicy />} /> 
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;