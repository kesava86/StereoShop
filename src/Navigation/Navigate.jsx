import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart.jsx";
import Home from "../Pages/Home.jsx";
import Login from "../Components/Login.jsx";
import Signup from "../Components/Signup.jsx"

export default function Navigate() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>

    </Routes>
  );
}
