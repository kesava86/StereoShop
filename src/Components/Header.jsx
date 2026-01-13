import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch, IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import styles from "./Header.module.css";
import { useCart } from "../Context/CartContext";
import SearchOverlay from "./SearchOverlay";

export default function Header({ onProfileClick }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  const { cart } = useCart();

  // total quantity (important)
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      {/* HEADER */}
      <div className="d-flex align-items-center justify-content-between px-4 py-4">
        <Link to="/" className="text-decoration-none">
          <h1 className="fs-3 text-white m-0">STEREO SHOP</h1>
        </Link>

        {/* Desktop Icons */}
        <div className="d-none d-sm-flex align-items-center text-white">
          <div
            className={`${styles.iconBox} me-5`}
            style={{ cursor: "pointer" }}
            onClick={() => setShowSearch(true)}
          >
            <IoSearch size={20} />
            <span className={styles.iconText}>Search</span>
          </div>

          <Link
            to="/cart"
            className="text-white text-decoration-none position-relative"
          >
            <div className={`${styles.iconBox} me-5`}>
              <IoCartOutline size={22} />
              <span className={styles.iconText}>Cart</span>

              {cartCount > 0 && (
                <span className={styles.cartBadge}>{cartCount}</span>
              )}
            </div>
          </Link>

          {/* PROFILE DROPDOWN */}

          <div className={`position-relative ${styles.profileWrapper}`}>
            {/* PROFILE ICON */}
            <div  style={{ cursor: "pointer" }}>
              <GoPerson size={20} />
              <span className={styles.iconText}>Profile</span>
            </div>

            {/* DROPDOWN (ON HOVER via CSS) */}
            <div className={`${styles.profileDropdown} shadow`}>
              <p className="mb-1 text-white fw-semibold">Hello!</p>
              <p className="small text-secondary mb-3">
                Access account and manage orders
              </p>

              <p
                className="w-50 mb-2 text-light"
                style={{
                  cursor: "pointer",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                  textAlign: "center",
                  fontSize:"12px",
                  fontWeight:"bold"
                }}
                onClick={onProfileClick}
              >
                Login / Signup
              </p>

              <hr />

              <p
                className="text-light small mb-0"
                style={{ cursor: "pointer" }}
                onClick={onProfileClick} 
              >
                Please Login
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="d-sm-none text-white">
          {open ? (
            <IoClose size={28} onClick={() => setOpen(false)} />
          ) : (
            <IoMenu size={28} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="d-sm-none text-white px-4 py-3 bg-black">
          {/* SEARCH */}
          <p
            className="mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowSearch(true); // ✅ open search overlay
              setOpen(false); // ✅ close hamburger
            }}
          >
            Search
          </p>

          {/* CART */}
          <p
            className="mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/cart"); // ✅ go to cart page
              setOpen(false); // ✅ close hamburger
            }}
          >
            Cart
          </p>

          {/* PROFILE */}
          <p
            className="mb-0"
            style={{ cursor: "pointer" }}
            onClick={() => {
              onProfileClick(); // ✅ open login overlay
              setOpen(false); // ✅ close hamburger
            }}
          >
            Profile
          </p>
        </div>
      )}

      {showSearch && <SearchOverlay onClose={() => setShowSearch(false)} />}
    </>
  );
}
