import React, { useState } from 'react';
import './Search.css';

const allSneakers = [
  { id: 1, name: "Nike Air Max Pulse '26", brand: "Nike", price: 14999, size: [40, 41, 42, 43], img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc184e?w=800" },
  { id: 2, name: "Air Jordan 1 Retro High OG", brand: "Jordan", price: 18999, size: [40, 42, 44], img: "https://images.unsplash.com/photo-1606107555044-0a8d2697c2d6?w=800" },
  { id: 3, name: "Adidas Samba OG", brand: "Adidas", price: 11499, size: [39, 41, 43], img: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=800" },
  { id: 4, name: "New Balance 550", brand: "New Balance", price: 12799, size: [40, 42], img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc184e?w=800" },
  { id: 5, name: "Puma Speedcat OG", brand: "Puma", price: 10999, size: [41, 43, 44], img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800" },
  { id: 6, name: "Nike Cortez Classic", brand: "Nike", price: 9499, size: [39, 40, 42], img: "https://images.unsplash.com/photo-1606107555044-0a8d2697c2d6?w=800" },
  { id: 7, name: "Yeezy 700 V3", brand: "Yeezy", price: 24999, size: [41, 42, 44], img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800" },
  
];

const brands = ["Nike", "Jordan", "Adidas", "New Balance", "Puma", "Yeezy"];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 30000 });
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortBy, setSortBy] = useState('newest');

  const sizes = [39, 40, 41, 42, 43, 44];

  const toggleBrand = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedBrands([]);
    setPriceRange({ min: 0, max: 30000 });
    setSelectedSizes([]);
    setSortBy('newest');
  };

  const filteredSneakers = allSneakers
    .filter(sneaker => {
      const matchesSearch = sneaker.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(sneaker.brand);
      const matchesPrice = sneaker.price >= priceRange.min && sneaker.price <= priceRange.max;
      const matchesSize = selectedSizes.length === 0 || sneaker.size.some(s => selectedSizes.includes(s));
      return matchesSearch && matchesBrand && matchesPrice && matchesSize;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0; 
    });

  return (
    <div className="search-page" id="search">
      <section className="search-hero">
        <h1>Search Sneakers</h1>
        <p>Find your perfect pair from our premium collection</p>
      </section>

      <div className="search-container">
         
        <aside className="filters-sidebar">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search by name (e.g. Air Max)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <h3>Brand</h3>
            {brands.map(brand => (
              <label key={brand} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                />
                {brand}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h3>Price Range</h3>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="Min ₹"
                value={priceRange.min}
                onChange={e => setPriceRange({ ...priceRange, min: Number(e.target.value) || 0 })}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max ₹"
                value={priceRange.max}
                onChange={e => setPriceRange({ ...priceRange, max: Number(e.target.value) || 30000 })}
              />
            </div>
          </div>

          <div className="filter-group">
            <h3>Size (UK)</h3>
            <div className="size-grid">
              {sizes.map(size => (
                <label key={size} className="size-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedSizes.includes(size)}
                    onChange={() => toggleSize(size)}
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-actions">
            <button onClick={clearFilters} className="clear-btn">Clear All</button>
          </div>
        </aside>

         
        <main className="results-main">
          <div className="results-header">
            <p>{filteredSneakers.length} results found</p>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="sort-select">
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {filteredSneakers.length === 0 ? (
            <div className="no-results">
              <h2>No sneakers found</h2>
              <p>Try adjusting your filters or search term</p>
              <button onClick={clearFilters}>Clear Filters</button>
            </div>
          ) : (
            <div className="products-grid">
              {filteredSneakers.map(sneaker => (
                <div className="product-card" key={sneaker.id}>
                  <div className="product-image">
                    <img src={sneaker.img} alt={sneaker.name} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <h3>{sneaker.name}</h3>
                    <p className="brand">{sneaker.brand}</p>
                    <p className="price">₹{sneaker.price.toLocaleString()}</p>
                    <button className="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Search;