import React from "react";
import styles from "./Signup.module.css";

export default function Signup({ onClose, onLoginOpen }) {
  return (
    <div className={`${styles.overlay} d-flex align-items-center justify-content-center`}>
      <div className={`${styles.signupBox} p-4`}>

        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        {/* Title */}
        <h3 className="text-white mb-2">Create Account</h3>

        <p className="text-secondary mb-4">
          Already have an account?{" "}
          <span
            className={styles.linkText}
            style={{ cursor: "pointer" }}
            onClick={onLoginOpen}
          >
            Login
          </span>
        </p>

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
