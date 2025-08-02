// src/components/FoodMenu.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './FoodMenu.css';
import pizza from '../assets/margherita.jpg';
import burger from '../assets/veg_burger.jpg';
import dosa from '../assets/masala_dosa.jpg';
import chole from '../assets/chole_bhature.jpg';
import pasta from '../assets/pasta.jpg';
import momos from '../assets/momos.jpg';
import idli from '../assets/idli.jpg';
import sandwich from '../assets/sandwich.jpg';
import lassi from '../assets/lassi.jpg';
import coldcoffee from '../assets/coldcoffee.jpg';
import poha from '../assets/poha.jpg';
import rajma from '../assets/rajma.jpg';
import paneermasala from '../assets/paneermasala.jpg';
import gulab from '../assets/gulab.jpg';
import ice from '../assets/ice.jpg';

const foodItems = [
  { id: 1, name: 'Margherita Pizza', image: pizza, price: '₹150', category: 'Dinner' },
  { id: 2, name: 'Veg Burger', image: burger, price: '₹80', category: 'Snacks' },
  { id: 3, name: 'Masala Dosa', image: dosa, price: '₹100', category: 'Breakfast' },
  { id: 4, name: 'Chole Bhature', image: chole, price: '₹120', category: 'Dinner' },
  { id: 5, name: 'Pasta', image: pasta, price: '₹130', category: 'Dinner' },
  { id: 6, name: 'Veg Momos', image: momos, price: '₹70', category: 'Snacks' },
  { id: 7, name: 'Steamed Idli', image: idli, price: '₹60', category: 'Breakfast' },
  { id: 8, name: 'Cheese Sandwich', image: sandwich, price: '₹90', category: 'Snacks' },
  { id: 9, name: 'Lassi', image: lassi, price: '₹99', category: 'Drinks' },
  { id: 10, name: 'Cold Coffee', image: coldcoffee, price: '₹149', category: 'Drinks' },
  { id: 11, name: 'Poha', image: poha, price: '₹159', category: 'Breakfast' },
  { id: 12, name: 'Rajma Chawal', image: rajma, price: '₹189', category: 'Lunch' },
  { id: 13, name: 'Paneer Butter Masala', image: paneermasala, price: '₹209', category: 'Lunch' },
  { id: 14, name: 'Gulab Jamun', image: gulab, price: '₹70', category: 'Dessert' },
  { id: 15, name: 'Ice Cream', image: ice, price: '₹80', category: 'Dessert' },
];

const FoodMenu = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = foodItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="food-section">
      <h2 className="section-title">Our Menu</h2>

      <input
        type="text"
        className="search-bar"
        placeholder="Search food..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="category-buttons">
        {['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Drinks', 'Dessert'].map(cat => (
          <button
            key={cat}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <p className="no-items-message">No items found.</p>
      ) : (
        <div className="food-menu">
          {filteredItems.map(item => (
            <div className="food-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p>Delicious and freshly prepared</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodMenu;