import React from "react";

function WhatsApp({ phone = "918767971866", messege = "hello" }) {
  const openWh = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(messege)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return <button onClick={openWh}>Whatsapp</button>;
}

export default WhatsApp;
