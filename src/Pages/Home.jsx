import React, { useEffect, useState } from "react";
import productsData from "../../src/Data/productsData.js";
import styles from "./Home.module.css";
import { FaShippingFast, FaShieldAlt, FaTags, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  /* ---------------- HERO SLIDER ---------------- */
  const sliderProducts = productsData.slice(0, 3);
  const [activeIndex, setActiveIndex] = useState(0);
  const renderStars = (count) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: i < count ? "red" : "#555" }}>
          ★
        </span>
      ))}
    </>
  );
};


  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderProducts.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const product = sliderProducts[activeIndex];

  /* ---------------- FEATURED SLIDER ---------------- */
  const featuredProducts = productsData.slice(0, 10);
  const [current, setCurrent] = useState(2);

  const visibleCount = 5;
  const half = Math.floor(visibleCount / 2);

  const getVisibleProducts = () => {
    const items = [];
    for (let i = -half; i <= half; i++) {
      const index =
        (current + i + featuredProducts.length) % featuredProducts.length;
      items.push({ ...featuredProducts[index], pos: i });
    }
    return items;
  };
  // AUTO SLIDE FEATURED PRODUCTS
  useEffect(() => {
    const auto = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredProducts.length);
    }, 3500);

    return () => clearInterval(auto);
  }, []);

  /* ---------------- TOP PRODUCTS ---------------- */

  const categories = ["All", "Headphones", "Earbuds", "Earphones", "Neckbands"];
  const [activeCategory, setActiveCategory] = useState("All");

  const topProducts =
    activeCategory === "All"
      ? productsData.slice(0, 11)
      : productsData.filter((item) => item.category === activeCategory);

  return (
    <>
      {/*  HERO SLIDER  */}
      <div className={styles.sliderWrapper}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-white">
              <h6 className="text-secondary">{product.brand}</h6>

              <h1 className={styles.heading}>
                {product.tagline || product.info}
              </h1>

              <div className="d-flex align-items-center my-3 gap-3">
                <span className={styles.price}>₹{product.finalPrice}</span>
                <span className={styles.oldPrice}>
                  ₹{product.originalPrice}
                </span>
              </div>

              <button className="btn btn-danger px-4 rounded-1">
                Shop Now
              </button>
            </div>

            <div className="col-md-6 text-center">
              <img
                src={product.heroImage || product.images[0]}
                alt={product.title}
                className={styles.productImage}
              />
            </div>
          </div>

          <div className={styles.dots}>
            {sliderProducts.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  activeIndex === index ? styles.activeDot : ""
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= FEATURED PRODUCTS ================= */}
      <div className={styles.featuredWrapper}>
        <h3 className="text-center text-white mb-5">Featured Products</h3>

        <div className={styles.featuredSlider}>
          {getVisibleProducts().map((item, i) => (
            <div
              key={i}
              className={`${styles.featuredItem} ${
                item.pos === 0 ? styles.featuredActive : ""
              }`}
            >
              {/* PRODUCT NAME (TOP) */}
              <p className="text-white text-center mb-2 small">{item.title}</p>

              {/* IMAGE */}
              <img src={item.images[0]} alt={item.title} />

              {/* PRICE (BOTTOM) */}
              <div className="text-center mt-3">
                <span className="text-white fw-semibold me-2">
                  ₹{item.finalPrice}
                </span>
                <span className="text-secondary text-decoration-line-through small">
                  ₹{item.originalPrice}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className={styles.dots}>
          {featuredProducts.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${
                i === current ? styles.activeDot : ""
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>

      {/* ================= TOP PRODUCTS ================= */}
      <div className={styles.topWrapper}>
        <h3 className="text-center text-white mb-4">Top Products</h3>

        {/* CATEGORY TABS */}
        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${
                activeCategory === cat ? styles.activeTab : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        <div className="container">
          <div className="row g-4 mt-3">
            {topProducts.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                <div className={styles.topCard}>
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className={styles.topImg}
                  />

                  <div className={styles.topBody}>
                    <div className={styles.rating}>
                      {renderStars(item.rateCount)}
                    </div>

                    <h6 className="text-white">{item.title}</h6>
                    <p className="text-secondary small">{item.info}</p>

                    <div className={styles.priceRow}>
                      <span className={styles.finalPrice}>
                        ₹{item.finalPrice}
                      </span>
                      <span className={styles.oldPrice}>
                        ₹{item.originalPrice}
                      </span>
                    </div>
                  </div>

                  <button className={styles.cartBtn}>Add to cart</button>
                </div>
              </div>
            ))}

            {/* BROWSE ALL PRODUCTS CARD */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Link to="/products" className="text-decoration-none">
                <div className={`${styles.topCard} ${styles.browseCard}`}>
                  <h5 className="text-secondary">Browse All Products →</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.advWrapper}>
        <h3 className="text-center text-white mb-5">Our Advantages</h3>

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className={`${styles.advItem} d-flex align-items-start`}>
                <FaShippingFast className={styles.icon} />
                <div className="ms-3">
                  <h6 className="text-white mb-1">Express Delivery</h6>
                  <p className="text-secondary small mb-0">Ships in 24 Hours</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className={`${styles.advItem} d-flex align-items-start`}>
                <FaShieldAlt className={styles.icon} />
                <div className="ms-3">
                  <h6 className="text-white mb-1">Brand Warranty</h6>
                  <p className="text-secondary small mb-0">
                    100% Original products
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className={`${styles.advItem} d-flex align-items-start`}>
                <FaTags className={styles.icon} />
                <div className="ms-3">
                  <h6 className="text-white mb-1">Exciting Deals</h6>
                  <p className="text-secondary small mb-0">
                    On all prepaid orders
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className={`${styles.advItem} d-flex align-items-start`}>
                <FaLock className={styles.icon} />
                <div className="ms-3">
                  <h6 className="text-white mb-1">Secure Payments</h6>
                  <p className="text-secondary small mb-0">
                    SSL / Secure certificate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
