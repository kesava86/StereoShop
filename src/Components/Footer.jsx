import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="bg-black text-secondary pt-5">
      <div className="container-fluid px-3 px-md-5">

        {/* TOP SECTION */}
        <div className="row">

          {/* Tech-Shop */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="text-white mb-3">STEREO-SHOP</h5>
            <p className="small">
              Subscribe to our Email alerts to receive early discount offers,
              and new products info.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-2">
              <input
                type="email"
                className="form-control bg-dark text-white border-secondary w-100"
                placeholder="Email Address"
              />
              <button className="btn btn-danger px-2">
                Subscribe
              </button>
            </div>
          </div>

          {/* Help */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="text-white mb-3">Help</h6>
            <ul className="list-unstyled small">
              <li className={`${styles.footer} my-1 text-secondary`}>FAQs</li>
              <li className={`${styles.footer} my-1 text-secondary`}>Track Order</li>
              <li className={`${styles.footer} my-1 text-secondary`}>Cancel Order</li>
              <li className={`${styles.footer} my-1 text-secondary`}>Return Order</li>
              <li className={`${styles.footer} my-1 text-secondary`}>Warranty Info</li>
            </ul>
          </div>

          {/* Policies */}
          <div className="col-6 col-md-3 mb-4">
            <h6 className="text-white mb-3">Policies</h6>
            <ul className="list-unstyled small">
              <li className={`${styles.footer} my-1 text-secondary`}>Return Policy</li>
              <li className={`${styles.footer} my-1 text-secondary`}>Security</li>
              <li className={`${styles.footer} my-1 text-secondary`}>Sitemap</li>
              <li className={`${styles.footer} my-1 text-secondary`}>Privacy Policy</li>
              <li className={`${styles.footer} my-1 text-secondary`}>Terms & Conditions</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-6 col-md-3 mb-4">
            <h6 className="text-white mb-3">Company</h6>
            <ul className="list-unstyled small">
              <li className={`${styles.footer} my-1 text-secondary`}>About Us</li>
              <li className={`${styles.footer} my-1 text-secondary`}>Contact Us</li>
              <li className={`${styles.footer} my-1 text-secondary`}>Service Centres</li>
              <li className={`${styles.footer} my-1 text-secondary`}>Careers</li>
              <li className={`${styles.footer} my-1 text-secondary`}>Affiliates</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* BOTTOM SECTION */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pb-3 gap-3">
          <p className="mb-0 small text-center text-md-start">
            © 2026 | All Rights Reserved.
          </p>

          <div className="d-flex gap-4">
            <FaFacebookF size={18} className={styles.icon} />
            <FaTwitter size={18} className={styles.icon} />
            <FaInstagram size={18} className={styles.icon} />
            <FaLinkedinIn size={18} className={styles.icon} />
          </div>
        </div>

      </div>
    </footer>
  );
}
