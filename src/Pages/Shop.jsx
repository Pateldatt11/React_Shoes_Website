import React from 'react';
import './Shop.css';

const sneakers = [
  { id: 1, name: "Nike Air Max Pulse '26", desc: "Bold cushioning with futuristic design", price: "₹14,999", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRow1ZsVEiroj5cfw3UC1DCs3zODO_coQJcs4CIc27YjwDnj_Q3nYuZOFHFKZ-qC_XVnl7yAlGwRbEKfnCtybaz9q5mIYgRWdI54qQgsaVVcTK73PvlNOGJUA" },


  { id: 2, name: "Air Jordan 1 Retro High OG", desc: "Classic black & red – timeless icon", price: "₹18,999", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQEkjI_fKtrx90z8plWZaCR4GAhA5l1B7f46D0qtR3NeiC5GyKSDpViIbDYxu2snEZ_fNqysIdZWuRFwTvc2SRwywuXFy3zMVNJc-NwtaUVcOdbDPiEhQpB_w" },


  { id: 3, name: "Adidas Samba OG", desc: "Retro soccer style, street favorite", price: "₹11,499", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhdq9ty3FL_Ep1wqBPrsGxCgWp1f1UPxLgJv4ZiHMWIDfZysmIE1f29PuSEdkDM_50essPMn9NhIUVMUB-LPsYGdSlNkyvbA" },


  { id: 4, name: "New Balance 550 'White/Green'", desc: "Clean vintage basketball vibe", price: "₹12,799", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQktS2E9jijHFF_PpzFOfHA3gnSdRtv-HrnVmurPU6gOoLMzpybw7mLvTq6ELS_j5xbZ4TMkFYFrhkBpy6Gr3IpiOQq6Q07" },


  { id: 5, name: "Yeezy 700 V3 'Dark Glow'", desc: "Chunky futuristic comfort", price: "₹24,999", img: "https://images.stockx.com/images/adidas-Yeezy-700-V3-Blue-Glow-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358" },


  { id: 6, name: "Puma Speedcat OG", desc: "Slim retro runner – 2026 trend", price: "₹10,999", img: "https://cdn-images.farfetch-contents.com/27/68/24/50/27682450_57589236_1000.jpg" },


  { id: 7, name: "Nike Cortez Classic", desc: "Timeless low-profile runner", price: "₹9,499", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRKfKWyysL6Gi2XUjHPbWyKzUdDTd8xIF8f9Fj74qxSCLM0M1npJzAWO81HwIC26MdZnmgGYPD9nxgXSkTji-NGQ5DqOdDBvtP_fARq8q1s5Layl5WujeM_Vw" },


  { id: 8, name: "Air Jordan 4 'White Cement'", desc: "Iconic re-release 2025", price: "₹22,499", img: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/uuivavbco2mqrxwwlfyj/air-jordan-4-retro-white-cement-grey-release-date.jpg" },


  { id: 9, name: "New Balance 2002R 'Protection Pack'", desc: "Premium comfort daily wear", price: "₹15,999", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPB9GmOGlajuElhI99LENKqij5kRBzRSE2VtAQs3TICjxYXG9ieKwR0msVQtIDteHq4OBMeawh6EknXoc3zZ3LO88WVNvV" },


  { id: 10, name: "Adidas Gazelle Indoor", desc: "Soft suede, indoor court style", price: "₹11,999", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS72Bbhma8BEWBaTluUh96be1dwUo0TcCuVIeWaVnkpbvOnmJQBwNCXIc2nBuiGG8Pzx3n9mvXds8BWycva0jY3OU49-3CqvSrSx24vdQSpITuYvJQxyjkO-w" },


  { id: 11, name: "Nike Vomero 5", desc: "Ultimate running cushion", price: "₹13,499", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS-6PR63M48p4y3y9akfcWTLo7zj2HQueUtzlQdztqLr0W7QB1MIgBlwP_YlEDv9ynBki70totu7BnjwxfMZsrcP36mB3pbbiQ9YcC6QQoObbDmL5KyBeL7nA" },


  { id: 12, name: "Air Jordan 5 'Black Metallic'", desc: "Reimagined classic", price: "₹21,999", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRDTZAJR9C8Fo01kjEjy7rgXD4R0MedfmjgFZGGHOtcfnaVJNVOVn1pmGzz7FPHlVxrQn94-2Q28m0uGGjfQpgOcZ7dNFY-3-fKoGm1j5MzTYNuuGIvpxidkw" },

  
  { id: 13, name: "On CloudTilt", desc: "All-day standing comfort", price: "₹16,499", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTG0xFTDMoJZGle2Wdp6Sa5lIL0_lAxF4v8ee3adcqgu5pdyAVFVOVhwIGkfnul2ocTtSk2stRV5lRvv70D4qVjrI7qQ2DxnxjidWSm_45NGkoq_SRpYaB_b9Y" },

  
  { id: 14, name: "Asics Skyhand OG", desc: "Retro lifestyle perfection", price: "₹14,299", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSKOG0oL0kJGMaafMZ6t9fQV6XB5VjnnN9FG1U3LTus1twAAjjDM0W1Bx9NeKqlpjjuJmXFbP9-L2B3sdM-b8Kk6L_MjenvD6PcrkB0ORDtx8cCIH9VuwQj" },


  { id: 15, name: "Puma Avanti", desc: "Sleek football heritage", price: "₹10,799", img: "https://m.media-amazon.com/images/I/61i2IDX2rVL.jpg" },


  { id: 16, name: "Nike Pegasus Premium", desc: "High-performance daily", price: "₹15,499", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfkWDxpH-1My6_VYDTxaoIuZPn-HNND724Ir9ryT1UlY_SflcVXOz_0bpz5YxX0coRPc-dOx-xF-c4jWpry-5Wf1SIZMySoAZvibhQDjuBmXWTt49O9yMFjkg" },


  { id: 17, name: "Adidas Tokyo", desc: "Slim runner revival", price: "₹11,299", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTRiGO_j2ZiKaONRh6fjLmBBQKf0SinqRV_H-nUZnOEfPTk_jc99oa-xe7ON7VvkvvKC2TKat9id1l4xK4cCC92JzZpep-oANDc4ix7h9hIFo5k5owuo_F93Q" },


  { id: 18, name: "New Balance Allerdale", desc: "Grandpa shoe trend leader", price: "₹13,999", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0ebWTwWWZHioygpTiyGJTIU7ednYTrqB04_1nfhInU-V5MoYnItGBtNBsq3g8dXVztr5khWLmtrd_lRcAY400uiuZ5RVy" },


  { id: 19, name: "Air Jordan 3 'Black Cat'", desc: "Stealth all-black 2025", price: "₹19,999", img: "https://cdn-images.farfetch-contents.com/26/92/35/86/26923586_57326868_600.jpg" },


  { id: 20, name: "Yeezy SL-01 Slipper", desc: "Ultra-comfy casual slide", price: "₹8,999", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRHZXh-haubAAcChfhIM5zmetIPdAzg4P-R_TI02u-iaGDTpJ_WLYXQKsQeaoRVFfMn4sXGSrywkklXd6bcfMedF6LGq4NhUJGRcuixr8laamDtlqWUsx5ZATD_" },


  { id: 21, name: "Nike Air Force 1 '07", desc: "Ultimate street staple", price: "₹10,499", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScTHseWJYdxSPKKwMSBjloUlLkEA8jZkjNeifmEyw2kUTs9FlEodz2iX24qg3PoXPFFH2tsYv8JMH3WbfNeS83K7qIcbJWSth0whrkCd1ir-CkGFG3A-7367s" },


  { id: 22, name: "Adidas Bad Bunny Ballerina", desc: "Slim hybrid fashion sneaker", price: "₹17,999", img: "https://image.goat.com/1000/attachments/product_template_pictures/images/109/523/173/original/1563511_00.png.png" },


  { id: 23, name: "Salomon XT-6", desc: "Gorpcore trail runner", price: "₹18,499", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRkqg_tGYAidHeYqsoq_vtNNHOTgS4GWKBlwy8-7RNEhAXXXb6eyBKcN-L1h-J5HMgSMj2yTD8PECxY4jBYsREzKNfvTkgBCoO87ADgKhAvFlRRhjbJjKYxcts" },


  { id: 24, name: "Golden Goose Marathon", desc: "Luxury retro runner", price: "₹28,999", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRbIEk1vTsf9t-yztwyAQI2D8ejnxFVYOGFnL6F__eKwrhLnI0ZJQxI-hw3Ir3RuT6UMza9ko7fpG4t-u2fMb3wH9QNszvQwy_MXQANebFxXaIHk9JpTkGkBw" },


  { id: 25, name: "Vans Classic Slip-On", desc: "Checkerboard timeless", price: "₹7,999", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR4suoWE3hRy_woK8H7RSxlp35ZBHXtF7yxoVefGZPWZ0lShUqawAhXPjtQCJU8wN0NzyMDCqIchvCMimvRfgxDDzktm11y" },


  { id: 26, name: "Onitsuka Tiger Mexico 66", desc: "Vintage athletic classic", price: "₹9,999", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT4b47tuOZZkKED-I7oXOVwsPBoK2yWyH068Hi9lNB2Umv-F4w1EWJzEJcf4-3GFpnYqrKbRWnuvIBowU6dMoOk7HTIjjbbfJgwk2T2GfDG5siL5KEZsfe0asc" },


  { id: 27, name: "Brooks Glycerin 22", desc: "Max cushion road runner", price: "₹16,999", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTHqm6wcey2DvrWirz6Ffe_34PiFHtA-z91keVAJeVecTAPLy1cHSH-VJ5-uoi-m0LP8yDRMspYkh6L4Z-Bf-w2CPSsClQKDI1okI0TE_4M0KcUn3dAjfKQyzI" },

  
];

const Shop = () => {
  const addToWishlist = (shoe) => {
    const newItem = {
      id: shoe.id,
      name: shoe.name,
      price: shoe.price,
      img: shoe.img,
      color: "Default Color",
    };

    const current = JSON.parse(localStorage.getItem('xlevelup_wishlist') || '[]');
    
    if (current.some(item => item.id === newItem.id)) {
      alert(`"${newItem.name}" is already in your wishlist!`);
      return;
    }

    const updated = [...current, newItem];
    localStorage.setItem('xlevelup_wishlist', JSON.stringify(updated));
    alert("Added to Wishlist!");
  };

  const addToCart = (shoe) => {
    const newItem = {
      id: shoe.id,
      name: shoe.name,
      price: shoe.price,
      img: shoe.img,
      color: "Default Color",
      quantity: 1,
    };

    const current = JSON.parse(localStorage.getItem('xlevelup_cart') || '[]');
    
    const existingIndex = current.findIndex(item => item.id === newItem.id);
    
    let updated;
    if (existingIndex !== -1) {
      updated = current.map((item, i) =>
        i === existingIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      alert(`Increased quantity of "${newItem.name}"`);
    } else {
      updated = [...current, newItem];
      alert(`"${newItem.name}" added to cart!`);
    }

    localStorage.setItem('xlevelup_cart', JSON.stringify(updated));
  };

  return (
    <div className="shop-page" id="shop">
      <section className="shop-hero">
        <h1>Shop All Sneakers</h1>
        <p>Discover the latest drops and timeless classics. Level up your collection today.</p>
      </section>

      <section className="products-section">
        <div className="products-grid">
          {sneakers.map((shoe) => (
            <div className="product-card" key={shoe.id}>
              <div className="product-image">
                <img src={shoe.img} alt={shoe.name} loading="lazy" />
              </div>
              <div className="product-info">
                <h3>{shoe.name}</h3>
                <p className="desc">{shoe.desc}</p>
                <p className="price">{shoe.price}</p>
                <div className="card-actions">
                  <button 
                    className="add-to-cart"
                    onClick={() => addToCart(shoe)}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="add-to-wishlist-btn"
                    onClick={() => addToWishlist(shoe)}
                  >
                    ♡ Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;