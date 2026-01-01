import React from "react";
import { getImage } from "../../utils/Imageloader";
import "./Cards.css";

export default function Cards({ items, onAdd }) {
  return (
    <div className="cards-container">
      {items.map((item) => {
        const src = getImage(item.image); // will be null if not found

        return (
          <div className="card" key={item.id}>
            {src ? (
              <img src={src} alt={item.name} className="card-img" />
            ) : (
              <div className="card-img placeholder">
                {/* accessible placeholder (optional) */}
                <span>No image</span>
              </div>
            )}

            <h3>{item.name}</h3>
            <p className="desc">{item.description}</p>

            <div className="bottom">
              <span className="price">{item.price}$</span>
              <span className="calories"> {item.calories}</span>
              {/* <span className="category">{item.category} </span> */}
            </div>
            <button
              className="p-1 relative mb-2 bg-amber-600 text-amber-100"
              onClick={() => onAdd(item)}
            >
              Add me
            </button>
          </div>
        );
      })}
    </div>
  );
}
