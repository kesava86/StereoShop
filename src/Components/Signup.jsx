import React from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";

export default function Signup() {
    
  return (
    <div className={`${styles.overlay} d-flex align-items-center justify-content-center`}>
      <div className={`${styles.signupBox} p-4`}>



        {/* Close Button */}
        <Link to="/"><button className={styles.closeBtn} >×</button></Link>
        {/* Title */}
        <h3 className="text-white mb-2">Create Account</h3>
        <Link to="/login" className="text-white text-decoration-none">
        <p className="text-secondary mb-4">
          Already have an account? <span className={styles.linkText}>Login</span>
        </p>
        </Link>

        {/* Name */}
        <input
          type="text"
          className={`form-control ${styles.input}`}
          placeholder="Name"
        />

        {/* Email */}
        <input
          type="email"
          className={`form-control ${styles.input}`}
          placeholder="Email"
        />

        {/* Password */}
        <input
          type="password"
          className={`form-control ${styles.input}`}
          placeholder="Password"
        />

        {/* Confirm Password */}
        <input
          type="password"
          className={`form-control ${styles.input}`}
          placeholder="Confirm Password"
        />

        {/* Register Button */}
        <button className={`btn btn-danger w-100 mt-3 ${styles.signupBtn}`}>
          Register
        </button>

      </div>
    </div>
  );
}
