import React, { useState, useEffect } from "react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Logo11 from "../../assets/log2.png";
import CafeLocation from "./Map";

function Navbar({ onSelect, cartCount = 0, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300
        flex items-center justify-between px-4 md:px-16 h-12 shadow
        ${scrolled ? "bg-white" : "bg-transparent"}`}
    >
      {/* LEFT: Menu */}
      <div className="flex items-center gap-3">
        <MenuBtn isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && (
          <Menu
            onSelectCategory={(value) => {
              onSelect(value);
              setIsMenuOpen(false);
            }}
          />
        )}
      </div>

      {/* CENTER: Logo */}
      <Logo />

      {/* RIGHT: Search + Cart + Map */}
      <div className="flex items-center gap-4">
        <SearchBar />

        {/* 🛒 Cart Button */}
        <button onClick={onCartClick} className="relative">
          <FaShoppingCart size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

        <Map />
      </div>
    </nav>
  );
}

export default Navbar;

/* ================= SUB COMPONENTS ================= */

const MenuBtn = ({ isMenuOpen, setIsMenuOpen }) => (
  <button
    className="relative z-10 border border-black p-2 rounded-md"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    <MdOutlineRestaurantMenu size={28} />
  </button>
);

const Menu = ({ onSelectCategory }) => (
  <ul className="absolute top-full left-0 bg-white shadow-lg p-4 rounded-md">
    <MenuLink label="Sweet" value="sweet" onSelect={onSelectCategory} />
    <MenuLink label="Savory" value="savory" onSelect={onSelectCategory} />
    <MenuLink label="Beverages" value="beverages" onSelect={onSelectCategory} />
    <MenuLink label="All" value="all" onSelect={onSelectCategory} />
  </ul>
);

const MenuLink = ({ label, value, onSelect }) => (
  <li className="py-1">
    <button
      type="button"
      onClick={() => onSelect(value)}
      className="hover:text-amber-600 transition-colors"
    >
      {label}
    </button>
  </li>
);

const Logo = () => (
  <div
    className="h-10 w-36 bg-contain bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${Logo11})`,
      backgroundSize: "70%",
    }}
  />
);

const SearchBar = () => (
  <div className="relative w-120 hidden md:block">
    <input
      type="text"
      placeholder="Find your fav treat..."
      className="h-10 border-2 w-full rounded-full px-3 py-1.5 outline-none
                 focus:ring-2 focus:ring-[#cc9319c0]"
    />
    <button
      className="absolute h-10 top-1/2 -translate-y-1/2 right-0
                 flex items-center justify-center w-12
                 border-2 border-amber-800 bg-amber-600 rounded-full
                 hover:bg-amber-500 hover:border-amber-600 transition"
    >
      <FaSearch />
    </button>
  </div>
);

const Map = () => <CafeLocation />;
