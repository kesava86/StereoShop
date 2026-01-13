import React from "react";
import styles from "./Login.module.css";

export default function Login({ onClose, onSignupOpen }) {
  return (
    <div
      className={`${styles.overlay} d-flex align-items-center justify-content-center`}
    >
      <div className={`${styles.loginBox} p-4`}>
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        {/* Title */}
        <h3 className="text-white mb-2">Login</h3>

        <p className="text-secondary mb-4">
          New to Stereo-Shop?{" "}
          <span
            className={styles.linkText}
            style={{ cursor: "pointer" }}
            onClick={onSignupOpen}
          >
            Create an account
          </span>
        </p>

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

        {/* Button */}
        <button className={`btn btn-danger w-100 mt-3 ${styles.loginBtn}`}>
          Login
        </button>
      </div>
    </div>
  );
}
