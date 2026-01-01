import React, { useMemo, useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ItemTypes from "../ItemTypes/ItemTypes";
import Hero from "../Hero/Hero";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";
import itemsData from "../../data/items.json";

function Home() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 🛒 Cart state (single source of truth)
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filter items by category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") return items;
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  // Load items
  useEffect(() => {
    setItems(itemsData.items);
  }, []);

  // Add to cart handler
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div className="bg-gray-300">
      <Navbar
        onSelect={setSelectedCategory}
        cartCount={cart.length}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Hero />
      <ItemTypes />

      {/* Product Cards */}
      <Cards items={filteredItems} onAdd={addToCart} />

      {/* Cart Drawer */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
      />
    </div>
  );
}

export default Home;
