import React, { useEffect, useState } from "react";
import productsData from "../../src/Data/productsData.js";
import styles from "./Home.module.css";

export default function Home() {
  const sliderProducts = productsData.slice(0, 3);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide (one by one)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderProducts.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const product = sliderProducts[activeIndex];

  return (
    <div className={styles.sliderWrapper}>
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
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

            <button className={` btn btn-danger px-4 rounded-1`} >
              Shop Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center">
            <img
              src={product.heroImage || product.images[0]}
              alt={product.title}
              className={styles.productImage}
            />
          </div>
        </div>

        {/* DOT NAVIGATION */}
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
  );
}
