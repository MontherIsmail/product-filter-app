import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

const App = () => {
  const products = [
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "T-shirt", category: "Clothing", price: 20 },
    { name: "Microwave", category: "Home Appliances", price: 150 },
    { name: "Headphones", category: "Electronics", price: 50 },
    { name: "Jacket", category: "Clothing", price: 80 },
    { name: "Blender", category: "Home Appliances", price: 60 },
  ];

  const [activeFilter, setActiveFilter] = useState('All');

  const getFilteredProducts = () => {
    if (activeFilter === 'All') {
      return products;
    }
    return products.filter(product => product.category === activeFilter);
  };

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductList 
        products={getFilteredProducts()} 
        onFilterChange={handleFilterChange} 
        activeFilter={activeFilter}
      />
    </div>
  );
};

export default App;
