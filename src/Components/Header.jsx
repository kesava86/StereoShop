import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch, IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <div className="d-flex align-items-center justify-content-between px-4 py-4 bg-black" >
        <Link to="/" className="text-decoration-none">
          <h1 className="fs-3 text-white m-0" style={{ cursor: "pointer" }}>
            STEREO SHOP
          </h1>
        </Link>

        {/* Desktop Icons */}
        <div className="d-none d-sm-flex align-items-center text-white">
          <div className={`${styles.iconBox} me-5`}>
            <IoSearch size={20} />
            <span className={styles.iconText}>Search</span>
          </div>
          <Link to="/cart" className="text-white text-decoration-none">
            <div className={`${styles.iconBox} me-5`}>
              <IoCartOutline size={22} />
              <span className={styles.iconText}>Cart</span>
            </div>
          </Link>

          <Link to="/signup" className="text-white text-decoration-none">
          <div className={styles.iconBox}>
            <GoPerson size={20} />
            <span className={styles.iconText}>Profile</span>
          </div>
          </Link>

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
          <p className="mb-3">Search</p>

          <Link
            to="/cart"
            className="text-white text-decoration-none"
            onClick={() => setOpen(false)}
          >
            <p className="mb-3">Cart</p>
          </Link>

          <p className="mb-0">Profile</p>
        </div>
      )}
    </>
  );
}
