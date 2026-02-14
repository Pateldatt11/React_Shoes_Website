import React from 'react';
import './Sale.css';

const saleItems = [
  { id: 1, name: "Air Jordan 1 Retro High OG", originalPrice: "₹18,999", salePrice: "₹12,999", discount: "32% OFF", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSRK8dQQjv4QBbdskmQVRmk_U9zwuf5kv7qR85qRPKKcQ3oLxCqUZvuXP7jVG9x-Jkef3YJBCqSa8OMDAJnclVkItAKcQaSrmfOkXQ8Fjk7wO4S_-6tSWdEYHo", tag: "Limited Stock" },


  { id: 2, name: "Nike Air Max Pulse '26", originalPrice: "₹14,999", salePrice: "₹9,999", discount: "33% OFF", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSpFtjaMUpFQhhXMleLsdO2-h-Mm1yq7Tm6GjMx2rGYadQY97-6IbgcXsGlP30LCCx2RTUksDFgDF8XOK2W33wSewP5JKspl5CiLdU7vu6kc2UdoHvtWzo4YA" },


  { id: 3, name: "Adidas Samba OG", originalPrice: "₹11,499", salePrice: "₹7,999", discount: "30% OFF", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTkd-yfzn8e-PoxOw1gDfaEJcrQRZGID8o-cr3iaPR7MXyUytN1ER6UO-yb1RtI9W4Q3DSVxTa0lk26pzY2rq3uYJFtmvcU", tag: "Hot Deal" },


  { id: 4, name: "New Balance 550 'White/Green'", originalPrice: "₹12,799", salePrice: "₹8,999", discount: "30% OFF", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRi63fcnMhiN8nHVqnMl4CyH2BurCuOX5NbW-QfhB0yVMiK-3Pd3XfoQemd1gVbhZ3gTOtvg7ELIrxaqQkIbqeLeLrO0A-QuxMG_QvmKrjHXVPwTaWIUUWvpXc" },


  { id: 5, name: "Puma Speedcat OG", originalPrice: "₹10,999", salePrice: "₹7,499", discount: "32% OFF", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/398846/56/sv01/fnd/IND/fmt/png/Speedcat-OG-Sneakers" },


  { id: 6, name: "Nike Cortez Classic", originalPrice: "₹9,499", salePrice: "₹6,499", discount: "32% OFF", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQRlDaWmyx5m-1pPqNc8-ns5ovyOuc6vKBWKgOM-jrbs9dnbEVWhXyfNO8NWijbtJN0UOF_0_OwjoncvEVBJioenvPRwtYe" },


  { id: 7, name: "Air Jordan 4 'White Cement'", originalPrice: "₹22,499", salePrice: "₹15,999", discount: "29% OFF", img: "https://theshoesociety.in/cdn/shop/files/Nike_Air_Jordan_4_Retro_White_Cement_f1463552-5aec-4efa-a12d-f326536c4d92.png?v=1757776250&width=1024", tag: "Limited Stock" },


  { id: 8, name: "Adidas Gazelle Indoor", originalPrice: "₹11,999", salePrice: "₹8,499", discount: "29% OFF", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQlkZNyAWhXuJ3-tIET5EQswzMmwnUxAHlTtM3EPitw7IGOkF8LrOhwLBovKIr-sekWNhkFhgnK9vcpQXSqhnT3Guoq1gNXLb-BLGijJHbjJVtb3_fRWKoYHA" },


  { id: 9, name: "Nike Vomero 5", originalPrice: "₹13,499", salePrice: "₹9,499", discount: "30% OFF", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSfmZtDUN1HPmUZGMriROdgpdlrc13lgffkL4TSdxtlewuDhyPfgtQ-MwXJUjg9alYYP1vrfIK8osVYtHDl1YiDgW7FXz-1l-K_LtJqR9Z-epCk35GqJ9Q-89Fo" },


  { id: 10, name: "New Balance 2002R", originalPrice: "₹15,999", salePrice: "₹11,499", discount: "28% OFF", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRXa4JtSuIh5vmC-OhZerYajdhL00pwu85kJ5AX4-UqaJ-pJa5EbLaeLiHgX8lVZ7WF4kc5acn3O4CsAtJ05cqGyp5cG2TvIqsjMm5-cUAfda9dwVHQEPQBJg" },


  { id: 11, name: "Puma Avanti OG", originalPrice: "₹10,799", salePrice: "₹7,299", discount: "32% OFF", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/404149/01/sv01/fnd/IDN/fmt/png/Sepatu-Sneaker-FENTY-x-PUMA-x-SMURFS-Avanti-Unisex" },


  { id: 12, name: "Asics Gel-NYC", originalPrice: "₹14,499", salePrice: "₹10,499", discount: "28% OFF", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTX39xxOl1CWA0TpI1WgaL4S0mZS5RaFDtQqiJxSGtAld00mkov5Ksrq58IDBaQLqmYk3w0CU8Jb1vTWutAWjHOFrXuAta-4W1IkKdX0piZgGnAZrZJqj_Dqg" },


];

const Sale = () => {
  const addToWishlist = (item) => {
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.salePrice,
      img: item.img,
      color: "Sale Special"
    };

    const current = JSON.parse(localStorage.getItem('xlevelup_wishlist') || '[]');
    
    if (current.some(i => i.id === newItem.id)) {
      alert("This Item Already In Wishlist");
      return;
    }

    const updated = [...current, newItem];
    localStorage.setItem('xlevelup_wishlist', JSON.stringify(updated));
    alert("Added To Wishlist (Sale item)");
  };

  const addToCart = (item) => {
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.salePrice,
      img: item.img,
      color: "Sale Special",
      quantity: 1
    };

    const current = JSON.parse(localStorage.getItem('xlevelup_cart') || '[]');
    
    const existingIndex = current.findIndex(i => i.id === newItem.id);
    let updated;
    if (existingIndex !== -1) {
      updated = [...current];
      updated[existingIndex].quantity = (updated[existingIndex].quantity || 1) + 1;
      alert("Item quantity increased in cart!");
    } else {
      updated = [...current, newItem];
      alert("Added to Cart!");
    }

    localStorage.setItem('xlevelup_cart', JSON.stringify(updated));
  };

  return (
    <div className="sale-page" id="sale">
      <section className="sale-hero">
        <div className="hero-content">
          <h1>End of Season Sale</h1>
          <p className="highlight">Up to <span>50% OFF</span> on Premium Sneakers</p>
          <p className="subtext">Limited time only • While stocks last</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </section>

      <section className="sale-products">
        <div className="section-header">
          <h2>Featured Deals</h2>
        </div>

        <div className="products-grid">
          {saleItems.map((item) => (
            <div className="sale-card" key={item.id}>
              <div className="sale-image">
                <img src={item.img} alt={item.name} loading="lazy" />
                {item.tag && <span className="sale-tag">{item.tag}</span>}
                <span className="discount-badge">{item.discount}</span>
              </div>
              <div className="sale-info">
                <h3>{item.name}</h3>
                <div className="price-container">
                  <span className="original-price">{item.originalPrice}</span>
                  <span className="sale-price">{item.salePrice}</span>
                </div>
                <div className="card-actions">
                  <button className="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button>
                  <button 
                    className="add-to-wishlist-btn"
                    onClick={() => addToWishlist(item)}
                  >
                    ♡ Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sale-cta">
        <h2>Don't Miss Out!</h2>
        <p>These deals are selling fast. Grab your favorites before they're gone.</p>
        <button className="shop-now-btn large">View All Sale Items</button>
      </section>
    </div>
  );
};

export default Sale;