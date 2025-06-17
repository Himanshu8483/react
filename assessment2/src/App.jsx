// File: App.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [brandFilter, setBrandFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const uniqueBrands = [...new Set(products.map((p) => p.brandName))];
  const uniqueColors = [...new Set(products.map((p) => p.color))];

  const handleBrandChange = (brand) => {
    setBrandFilter((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleColorChange = (color) => {
    setColorFilter((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  let filteredProducts = products
    .filter((p) =>
      p.productName.toLowerCase().includes(search.toLowerCase()) ||
      p.brandName.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      brandFilter.length > 0 ? brandFilter.includes(p.brandName) : true
    )
    .filter((p) => (colorFilter.length > 0 ? colorFilter.includes(p.color) : true));

  if (sortOrder === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const productsPerPage = 5;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const displayedProducts = filteredProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return (
    <div className="container">
      <h1 className="title">🛍️ Product Store</h1>

      <input
        type="text"
        placeholder="Search by name or brand..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="sort-section">
        <label>Sort by Price: </label>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">None</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="filters">
        <div className="filter">
          <h4>Filter by Brand:</h4>
          {uniqueBrands.map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                value={brand}
                checked={brandFilter.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              {brand}
            </label>
          ))}
        </div>

        <div className="filter">
          <h4>Filter by Color:</h4>
          {uniqueColors.map((color) => (
            <label key={color}>
              <input
                type="checkbox"
                value={color}
                checked={colorFilter.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              {color}
            </label>
          ))}
        </div>
      </div>

      <div className="product-grid">
        {displayedProducts.map((product) => (
          <div key={product.serialId} className="product-card">
            <h4>{product.productName}</h4>
            <p>{product.brandName}</p>
            <p>₹{product.price}</p>
            <p>{product.color}</p>
            <button onClick={() => handleAddToCart(product)}>🛒 Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="pagination">
        <h3>Pages</h3>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button key={p} onClick={() => setPage(p)}>
            {p}
          </button>
        ))}
      </div>

      <div className="cart">
        <h3>🛒 Cart</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.productName} - ₹{item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
