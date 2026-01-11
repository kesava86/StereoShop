import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart.jsx";

export default function Navigate() {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />

    </Routes>
  );
}
