// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import{AuthProvider} from "./context/AuthContext";
import Header from "./components/Header";
import FoodMenu from "./components/FoodMenu";
import CartPopup from "./components/CartPopup";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <AuthProvider>
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header toggleCart={toggleCart} />
                  <FoodMenu />
                  {isCartOpen && <CartPopup onClose={()=>setIsCartOpen(false)} />}
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;