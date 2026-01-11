import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../Data/productsData";
import reviewsData from "../Data/reviewsData";
import styles from "./ProductDetails.module.css";
import { useCart } from "../Context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  /* ---------------- PRODUCT STATE ---------------- */
  const [product, setProduct] = useState(null);
  const [activeImg, setActiveImg] = useState("");
  const [tab, setTab] = useState("specs");

  /* ---------------- LOAD PRODUCT WHEN ID CHANGES ---------------- */
  useEffect(() => {
    const foundProduct = productsData.find((p) => p.id === Number(id));
    setProduct(foundProduct);
  }, [id]);

  /* ---------------- RESET IMAGE & TAB ON PRODUCT CHANGE ---------------- */
  useEffect(() => {
    if (product) {
      setActiveImg(product.images[0]);
      setTab("specs");
    }
  }, [product]);

  if (!product) return null;

  /* ---------------- RELATED PRODUCTS ---------------- */
  const relatedProducts = productsData.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className={styles.wrapper}>
      <div className="container">
        {/* ================= SECTION 1 : PRODUCT INFO ================= */}
        <div className="row mb-5">
          {/* LEFT : IMAGE GALLERY */}
          <div className={`col-md-6 d-flex ${styles.imageSection}`}>

            <div className={styles.thumbs}>
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={product.title}
                  className={styles.thumb}
                  onClick={() => setActiveImg(img)}
                />
              ))}
            </div>

            <img
              src={activeImg}
              alt={product.title}
              className={styles.mainImg}
            />
          </div>

          {/* RIGHT : PRODUCT DETAILS */}
          <div className={`col-md-6 text-white ${styles.detailsSection}`}>

            {/* TITLE */}
            <h2 className="mb-1">{product.title}</h2>
            <p className="text-secondary mb-2">{product.info}</p>

            {/* RATING */}
            <div className={`${styles.rating} mb-3`}>
              {"★".repeat(product.rateCount)}
              {"☆".repeat(5 - product.rateCount)}
              <span className="text-secondary ms-2">
                | {product.ratingCount} Ratings
              </span>
            </div>

            <hr className={styles.divider} />

            {/* PRICE ROW */}
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h3 className="mb-1">
                  ₹{product.finalPrice}
                  <span className={styles.old}> ₹{product.originalPrice}</span>
                </h3>

                <p className="text-success mb-1">
                  You save ₹{product.originalPrice - product.finalPrice} (
                  {Math.round(
                    ((product.originalPrice - product.finalPrice) /
                      product.originalPrice) *
                      100
                  )}
                  %)
                </p>

                <p className="text-secondary small">(Inclusive of all taxes)</p>
              </div>

              {/* STOCK */}
              <span className={styles.stock}> In Stock</span>
            </div>

            <hr className={styles.divider} />

            {/* OFFERS */}
            <h6 className="mb-2">Offers and Discounts</h6>
            <div className={styles.offers}>
              <span>No Cost EMI on Credit Card</span>
              <span>Pay Later & Avail Cashback</span>
            </div>

            {/* ADD TO CART */}
            <button onClick={() => addToCart(product)} className={`btn btn-danger w-50 mt-4 ${styles.cartMain}`}>
              Add to cart
            </button>
          </div>
        </div>

        {/* ================= SECTION 2 : TABS ================= */}
        <div className={`${styles.section2} mb-5`}>
          {/* TAB HEADERS */}
          <div className={styles.tabs}>
            <span
              className={tab === "specs" ? styles.active : ""}
              onClick={() => setTab("specs")}
            >
              Specifications
            </span>
            <span
              className={tab === "overview" ? styles.active : ""}
              onClick={() => setTab("overview")}
            >
              Overview
            </span>
            <span
              className={tab === "reviews" ? styles.active : ""}
              onClick={() => setTab("reviews")}
            >
              Reviews
            </span>
          </div>

          {/* TAB CONTENT */}
          {tab === "specs" && (
            <div className={styles.specs}>
              <p>
                <b>Brand:</b> {product.brand}
              </p>
              <p>
                <b>Model:</b> {product.title}
              </p>
              <p>
                <b>Category:</b> {product.category}
              </p>
              <p>
                <b>Connectivity:</b> Wireless
              </p>
              <p>
                <b>Microphone:</b> Yes
              </p>
            </div>
          )}

          {tab === "overview" && (
            <div className={styles.overview}>
              <p>
                The <span className="text-danger">{product.title}</span>{" "}
                provides excellent sound quality with comfort and long playback.
              </p>
              <ul>
                <li>Sound Tuned to Perfection</li>
                <li>Comfortable to Wear</li>
                <li>Long Playback Time</li>
              </ul>
            </div>
          )}

          {tab === "reviews" && (
            <div className={styles.reviews}>
              {reviewsData.map((r) => (
                <div key={r.id} className={styles.review}>
                  <h6>{r.name}</h6>
                  <span className="text-secondary">{r.date}</span>
                  <p>{"★".repeat(r.rateCount)}</p>
                  <p>{r.review}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ================= SECTION 3 : RELATED PRODUCTS ================= */}
        <h3 className="text-center text-white mb-4">Related Products</h3>

        <div className={styles.relatedRow}>
          {relatedProducts.map((item) => (
            <div key={item.id} className={styles.relatedCard}>
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className={styles.relatedImg}
                />
              </Link>

              <div className={styles.relatedBody}>
                <div className={styles.rating}>
                  {"★".repeat(item.rateCount)}
                  {"☆".repeat(5 - item.rateCount)}
                </div>

                <h6 className="text-white mb-1">{item.title}</h6>

                <p className="text-secondary small mb-2">{item.info}</p>

                <div className={styles.priceRow}>
                  <span className={styles.final}>₹{item.finalPrice}</span>
                  <span className={styles.old}>₹{item.originalPrice}</span>
                </div>
              </div>

              <button onClick={() => addToCart(item)}  className={styles.cartBtn}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
