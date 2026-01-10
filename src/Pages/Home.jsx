import React, { useEffect, useState } from "react";
import productsData from "../../src/Data/productsData.js";
import styles from "./Home.module.css";

export default function Home() {
  /* ---------------- HERO SLIDER ---------------- */
  const sliderProducts = productsData.slice(0, 3);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderProducts.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const product = sliderProducts[activeIndex];

  /* ---------------- FEATURED SLIDER ---------------- */
  const featuredProducts = productsData.slice(0, 10);
  const [current, setCurrent] = useState(2); // center index

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

  return (
    <>
      {/* ================= HERO SLIDER ================= */}
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
    </>
  );
}
