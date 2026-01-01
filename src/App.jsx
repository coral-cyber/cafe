import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Loader from "./assets/loader.webp";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true); // start fade-out
    }, 1500); // fade starts before loader ends

    const endTimer = setTimeout(() => {
      setLoading(false);
    }, 2000); // loader removed after fade

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-white">
        <img
          src={Loader}
          alt="Loading..."
          className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out
            ${fadeOut ? "opacity-0" : "opacity-100"}`}
        />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
