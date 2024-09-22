import React from 'react';
import './ProductList.css';

const ProductList = ({ products, onFilterChange, activeFilter }) => {
  const filters = ['All', 'Electronics', 'Clothing', 'Home Appliances'];

  return (
    <div>
      <div id="filter-section">
        {filters.map(category => (
          <button 
            key={category}
            onClick={() => onFilterChange(category)}
            className={activeFilter === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      <div id="product-display">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="product-card">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <span>${product.price}</span>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
