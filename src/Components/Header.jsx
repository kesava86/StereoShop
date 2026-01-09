import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch, IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <>
      {/* HEADER */}
      <div className="d-flex align-items-center justify-content-between px-4 py-4 bg-black">
        <Link to="/" className="text-decoration-none">
          <h1 className="fs-3 text-white m-0">STEREO SHOP</h1>
        </Link>

        {/* Desktop Icons */}
        <div className="d-none d-sm-flex align-items-center text-white">

          <div className={`${styles.iconBox} me-5 shadow`}>
            <IoSearch size={20} />
            <span className={styles.iconText}>Search</span>
          </div>

          <Link to="/cart" className="text-white text-decoration-none">
            <div className={`${styles.iconBox} me-5`}>
              <IoCartOutline size={22} />
              <span className={styles.iconText}>Cart</span>
            </div>
          </Link>

          {/* PROFILE DROPDOWN */}
          <div className={`position-relative ${styles.profileWrapper}`}>
            <div onClick={()=>navigate("/login")} style={{cursor:"pointer"}}>
              <GoPerson size={20} />
              <span className={styles.iconText} >Profile</span>
            </div>

            {/* Dropdown */}
            <div className={`${styles.profileDropdown} shadow`}>
              <p className="mb-1 text-white fw-semibold">Hello!</p>
              <p className="small text-secondary mb-3">
                Access account and manage orders
              </p>

              <p
                className=" w-50 mb-2 text-secondary "
                style={{cursor:"pointer", border:"1px solid #444", padding:"4px", borderRadius:"2px"}}
                onClick={()=> navigate("/login")}
              >
                Login / Signup
              </p>
              <hr />

              <p
                className="text-secondary small mb-0 "
                style={{ cursor: "pointer"}}
                onClick={() => navigate("/login")}
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
          <p className="mb-3" style={{cursor:"pointer"}} >Search</p>

            <p className="mb-3" style={{cursor:"pointer"}}  onClick={()=>navigate("/cart")}>Cart</p>

          <p className="mb-0" style={{cursor:"pointer"}} onClick={()=> navigate("/login")}>Profile</p>
        </div>
      )}
    </>
  );
}
