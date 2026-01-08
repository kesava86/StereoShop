import React from "react";
import { Link } from "react-router-dom";
import { BsCartX } from "react-icons/bs";

export default function Cart({ cart = [] }) {

  if (cart.length === 0) {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center text-white"
        style={{ minHeight: "80vh" }}
      >
        <BsCartX size={150} color="red" />
        <h3 className="mt-4 ">Your Cart is Empty</h3>

        <Link to="/">
          <button
            className="btn btn-danger mt-3 px-4 py-2"
            style={{ fontWeight: "500", borderRadius:"0" }}
          >
            Start Shopping
          </button>
        </Link>
      </div>
    );
  }

  // WHEN CART HAS ITEMS
  return (
    <div className="p-5 text-white">
      <h2>Your Cart Items</h2>

      {cart.map((item, index) => (
        <div key={index} className="border-bottom py-3">
          {item.name}
        </div>
      ))}
    </div>
  );
}
