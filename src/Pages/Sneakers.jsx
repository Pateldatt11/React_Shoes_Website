import React from 'react';
import './Sneakers.css';

const sneakers = [
  { id: 1,  name: "Nike Air Max Pulse '26",              desc: "Futuristic cushioning & bold energy",                  price: "₹14,999", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRXFyYaQz8QYGiKnhB6MTOyegC8ZTCbqaGI-yVnlP7kF7B0JRDK1BR_pjUHBFFJR0sMVj-N4t1eRxl--Ae4L-HHTy-D0Aw56T4pj4iIqxtNrUeUtV1IDUr5uA" },


  { id: 2,  name: "Air Jordan 1 Retro High OG 'Black Toe'", desc: "Classic colorway revival 2026",                   price: "₹19,499", img: "https://www.kicksmachine.com/cdn/shop/files/Air-Jordan-1-Retro-High-OG-Black-Toe-Reimagined-Product.jpg?v=1745059980&width=600" },


  { id: 3,  name: "Adidas Samba OG 'Cloud White'",        desc: "Timeless soccer-to-street icon",                     price: "₹11,799", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSvyEPZOPApI-1uG7WWLKvrC8LDpdtw91kLWw_P3UVnZ7z8ErCXavbNcl2tnBYIqSByj5c45k3IJgx9hHk5Q-H4z8718COo" },


  { id: 4,  name: "New Balance 550 'Sea Salt/Green'",     desc: "Vintage basketball clean look",                      price: "₹13,299", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnmsAKGqgDDOY0mmmfy9SqxaloJsj9sJpYzm5c0PY3lGB3AwP18d-caTUWSp4tuPGfVtwsDTA1yE8D_kLnOL-lO8sPH2tY1g" },

  
  { id: 5,  name: "Puma Speedcat OG 'Black/Red'",         desc: "Slim retro runner dominating 2026",                  price: "₹50,999", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/402995/02/sv01/fnd/IND/fmt/png/Speedcat-Plus-Sneakers" },


  { id: 6,  name: "Nike Cortez 'Summit White'",           desc: "Low-profile everyday essential",                      price: "₹9,799",  img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTeUpyZww2oDqZDEwKYcQJca2i6Xoip1JyHobgy5-3Fl9FwhzK2-VbQ4g1m_rOxPLSRMudKPfES6RCllJLBi9WwIJoff6EtXdB6yECY0PQgu0eCuErY_YXSb1Jv" },


  { id: 7,  name: "Air Jordan 4 'White Cement Reimagined'", desc: "Iconic 2025/26 retro release",                    price: "₹22,999", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMAFkk1LvTO4O1cVhsJRvbt-2qNiRkiOBiabCFm4OMehmbNTmimrMDnekxe3PStZHV0Ggk-a2NdI3_j6FRxo2hkMa3kvznbA" },


  { id: 8,  name: "Asics Gel-NYC 'Black/Phantom'",        desc: "Hybrid comfort street beast",                        price: "₹14,499", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSI88qJGKWB4l0v7dToAih0RAWcPZKuo9zxPrG_r0nGgUe5JKQYj3bxLwRlsbz119JB89_E01XNJ6tbWw2aFzctfjfHXwyTSV98vYAudKOWNl-4GZuh-Q-Hfw" },


  { id: 9,  name: "Adidas Gazelle Indoor 'Bold Gold'",    desc: "Suede indoor court revival",                         price: "₹12,299", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQaKPR8MkKy0cC0SygspHi1M31AOw4a0V6GCV7-4Z_1A0lp2Mw3U2La2N2SCedCzRvYLVyU0bRXxXxuR73TjtDXm1iV43Xl5WL3VEqoP6yeUYuRZ9DM0uZDrw" },

  
  { id: 10, name: "Nike Vomero 5 'Photon Dust'",          desc: "Ultra-plush running daily driver",                   price: "₹13,999", img: "https://images.stockx.com/images/Nike-Zoom-Vomero-5-Photon-Dust-Metallic-Silver-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358" },


  { id: 11, name: "On Cloud 5 'All Black'",               desc: "Cloud-like comfort for all-day wear",                price: "₹14,799", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSe7rKUfAwvJ9YTsLjfEzKZh-44HHip7r7s5QTQH0MOQe722G5QsTKacc1MEfWZb-qBNELYV391STre8SgQd9Cu1CWS1j4CaCj3PtOn463wxHjzcOs-rLAbcUk" },


  { id: 12, name: "Salomon XT-6 'Black/Lunar Rock'",      desc: "Gorpcore trail runner trendsetter",                  price: "₹18,999", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQcsBHgRX5JzoXJJlXtrdqF6BsBXR7QEoy3EI3XLF_fogdUI_xPnIUPvK6jPHFOMOpvRyKkSiAm81SrXiVfLksq3Phen4HeYyTV2eW_YGBVo-bucPzb8smPBg" },


  { id: 13, name: "Air Jordan 11 'Gamma Blue' 2025",      desc: "30th anniversary fan favorite",                      price: "₹21,499", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQqZPCeNmiJRg3Am4Uf0uCb441RCU0FZzrnWFWUNQCu3BWi3JqQIiUT_NZuRZxVAWHkQlbKhArIl_CxwU-Ex3kJgQjNHZlr" },


  { id: 14, name: "Puma Avanti 'OG White/Black'",         desc: "Sleek football heritage low",                       price: "₹11,499", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/406329/01/sv01/fnd/IND/fmt/png/Speedcat-Sneakers" },


  { id: 15, name: "New Balance 2002R 'Protection Pack'",  desc: "Premium dad-shoe comfort",                           price: "₹15,999", img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/2/e21deb6M2002RDC_1.jpg?rnd=20200526195200&tr=w-1080" },


  { id: 16, name: "Adidas Tokyo 'Core Black'",            desc: "Slim runner making big comeback",                    price: "₹11,799", img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/977a8b6e438942f4b9f59fdf9446f696_faec/Tokyo_Shoes_Green_JI0182_db01_00_standard.tiff.jpg" },


  { id: 17, name: "Nike Pegasus Premium 'Triple Black'",  desc: "High-tech performance daily",                       price: "₹16,499", img: "https://crepdogcrew.com/cdn/shop/files/1_d543e715-df3f-4042-836b-cfbfc75f68e3.png?v=1755095199&width=2048" },


  { id: 18, name: "Asics Skyhand OG 'Cream/Oatmeal'",     desc: "Retro lifestyle perfection",                        price: "₹13,999", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRDnnOqrejz8M2nNNxqLotQWx6TnQ1NzbsFPdXOVVOyU4-cJZpSz94G1kUD79sYBHaIXI8GJ9H0SGGKfd5gEkyyMWfV6J7l_SLliGOx0-NSgBvSqzmfxjTDZA" },


  { id: 19, name: "Air Jordan 3 'Black Cat' 2025",        desc: "Stealth all-black edition",                         price: "₹20,499", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQeIXp3bduo8X5EkKJziy1v-p5vqh3lh6GtesnmQatwqUBM66tMLzNA0NngfVltbpfZOtKnaDBHkyV9N_2U__xHDEYKqRQLwcrY-DU-y1LXv1UzOerdwWlGyA" },


  { id: 20, name: "Onitsuka Tiger Mexico 66 'Classic'",   desc: "Vintage athletic timeless",                         price: "₹10,299", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ55_gySFtRojpZcahyc7i9yIs_80jAmMaZoLXqlGcKTBDV1u5LvNUV_Jlo5qZ6tKyXUIJWB_HG58RLIlviw3ygJxWhwT3ZoGl-Kgu9xVkjAcLAcEZ1ZBH5IQ" },


];

const Sneakers = () => {
  const addToWishlist = (shoe) => {
    const newItem = {
      id: shoe.id,
      name: shoe.name,
      price: shoe.price,
      img: shoe.img,
      color: "Default Color"
    };

    const current = JSON.parse(localStorage.getItem('xlevelup_wishlist') || '[]');
    
    if (current.some(item => item.id === newItem.id)) {
      alert("Wishlist Already contains this item!");
      return;
    }

    const updated = [...current, newItem];
    localStorage.setItem('xlevelup_wishlist', JSON.stringify(updated));
    alert(" Added to Wishlist!");
  };

  const addToCart = (shoe) => {
    const newItem = {
      id: shoe.id,
      name: shoe.name,
      price: shoe.price,
      img: shoe.img,
      color: "Default Color",
      quantity: 1
    };

    const current = JSON.parse(localStorage.getItem('xlevelup_cart') || '[]');
    
    const existingIndex = current.findIndex(item => item.id === newItem.id);
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
    <div className="sneakers-page" id="sneakers">
      <section className="sneakers-hero">
        <h1>Our Sneakers Collection</h1>
        <p>Premium drops, limited editions & everyday heat. Level up your rotation with the best in street culture.</p>
      </section>

      <section className="products-section">
        <div className="products-grid">
          {sneakers.map((shoe) => (
            <div className="sneaker-card" key={shoe.id}>
              <div className="sneaker-image">
                <img src={shoe.img} alt={shoe.name} loading="lazy" />
              </div>
              <div className="sneaker-info">
                <h3>{shoe.name}</h3>
                <p className="desc">{shoe.desc}</p>
                <p className="price">{shoe.price}</p>
                <div className="card-actions">
                  <button className="add-to-cart" onClick={() => addToCart(shoe)}>Add to Cart</button>
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

export default Sneakers;