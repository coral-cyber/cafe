import React from "react";
import milkShakes from "./../../assets/items/almondmilkshake.webp";
import bagel from "./../../assets/items/bagel.webp";
import baguette from "./../../assets/items/baguette.webp";
import brownie from "./../../assets/items/brownie.webp";
import burger from "./../../assets/items/burger.webp";
import rolls from "./../../assets/items/chickenroll.webp";
import coffee from "./../../assets/items/coffee.webp";
import corndog from "./../../assets/items/corndog.webp";
import cupcakes from "./../../assets/items/cupcake1.webp";
import cutlets from "./../../assets/items/cutlets.webp";
import donut from "./../../assets/items/donut1.webp";
import juices from "./../../assets/items/kewijuice.webp";
import pie from "./../../assets/items/pie.webp";
import pastry from "./../../assets/items/pastry.webp";

const items = [
  { id: 1, img: milkShakes, name: " MilkShakes" },
  { id: 2, img: bagel, name: "Bagel" },
  { id: 3, img: baguette, name: "Baguette" },
  { id: 4, img: brownie, name: "Brownie" },
  { id: 5, img: rolls, name: " Rolls" },
  { id: 6, img: burger, name: "Burger" },
  { id: 7, img: coffee, name: "Coffee" },
  { id: 8, img: corndog, name: "Corndog " },
  { id: 9, img: cupcakes, name: "Cupcakes" },
  { id: 10, img: cutlets, name: "Cutlets" },
  { id: 11, img: donut, name: "Donut" },
  { id: 12, img: juices, name: "Juices" },
  { id: 13, img: pie, name: "Pie" },
  { id: 14, img: pastry, name: "Pastry" },
];

function ItemTypes() {
  return (
    <div className="relative  m-0.5">
      <div
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(3px) saturate(160%) brightness(1.05)",
          WebkitBackdropFilter: "blur(3px) saturate(160%) brightness(1.05)",
          backgroundColor: "rgba(255, 255, 255, 0.18)",
          border: "1px solid rgba(0, 0, 0, 0.20)",
          zIndex: 1,
        }}
      ></div>
      <h3 className=" relative text-black font-semibold text-sm z-10 md:text-4xl">
        What's on your mind ?
      </h3>
      <div className=" relative z-10 pt-2 md:pt-4 flex gap-1 md:gap-3 overflow-x-auto  whitespace-nowrap">
        {items.map((item) => (
          <div
            key={item.id}
            className=" shrink-0 flex flex-col items-center justify-center"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-19 w-19 md:h-25 md:w-25 object-cover rounded-2xl border border-[#ffffff71]"
            />
            <span className="mt-1 text-[9px] md:text-sm font-medium text-black">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemTypes;
