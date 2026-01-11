import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login.jsx";
import Signup from "../Components/Signup.jsx";
import AllProducts from "../Components/AllProducts.jsx";
import Home from "../Pages/Home.jsx";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";

export default function ProfileNavigate() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
