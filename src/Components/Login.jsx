import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={`${styles.overlay} d-flex align-items-center justify-content-center`}>
      <div className={`${styles.loginBox} p-4`}>

        {/* Close Button */}
        <Link to="/"><button className={styles.closeBtn}>×</button></Link>

        {/* Title */}
        <h3 className="text-white mb-2">Login</h3>
        <Link to="/signup" className="text-white text-decoration-none">
        <p className="text-secondary mb-4">
          New to Stereo-Shop? <span className={styles.linkText}>Create an account</span>
        </p>
        </Link>

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
