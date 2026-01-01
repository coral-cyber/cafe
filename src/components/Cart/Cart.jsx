// import React, { useState } from "react";
// import Cards from "../Cards/Cards";
// import { BsWhatsapp } from "react-icons/bs";
// function Cart({ items = [] }) {
//   const [cart, setCart] = useState([]);

//   const addItem = (item) => {
//     setCart((prev) => [...prev, item]);
//   };

//   const sendWh = () => {
//     if (cart.length === 0) alert("Cart is empty. Add items first.");
//     return;

//     const phone = "918767971866";
//     let total = 0;

//     const itemLines = cart.map((item, i) => {
//       total += item.price;
//       return `${i + 1}. ${item.name} - $${item.price}`;
//     });

//     const message = `New Order\n${itemLines.join("\n")}\nTotal: $${total}`;

//     const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="grid gap-2">
//       {/* ✅ PASS ARRAY, DO NOT MAP */}
//       <Cards items={items} onAdd={addItem} />

//       <button
//         onClick={sendWh}
//         className="p-3 flex justify-center rounded-full items-center fixed bottom-4 left-4 z-9999 bg-green-600 h-16 w-16  "
//       >
//         <BsWhatsapp className="bg-green-600 h-14 w-14  " />
//       </button>
//       <p>Cart items: {cart.length}</p>
//     </div>
//   );
// }

// export default Cart;
import { BsWhatsapp } from "react-icons/bs";

function Cart({ isOpen, onClose, cart }) {
  if (!isOpen) return null;

  const sendWh = () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const phone = "918767971866";
    let total = 0;

    const lines = cart.map((item, i) => {
      total += item.price;
      return `${i + 1}. ${item.name} - $${item.price}`;
    });

    const message = `New Order\n${lines.join("\n")}\nTotal: $${total}`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      <div className="absolute right-0 top-0 h-full w-80 bg-white p-4 shadow-lg">
        <button onClick={onClose} className="mb-4 text-right w-full">
          ❌ Close
        </button>

        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

        {cart.length === 0 && <p>No items added</p>}

        <ul className="space-y-2">
          {cart.map((item, i) => (
            <li key={i} className="border p-2 rounded">
              <p className="font-medium">{item.name}</p>
              <p>${item.price}</p>
            </li>
          ))}
        </ul>

        <button
          onClick={sendWh}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded flex justify-center"
        >
          <BsWhatsapp size={22} />
        </button>
      </div>
    </div>
  );
}

export default Cart;
