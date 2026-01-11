import React, { useMemo, useState } from "react";
import productsData from "../../src/Data/productsData";
import styles from "./AllProducts.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function AllProducts() {

  const { addToCart } = useCart();

  /* ---------------- STATE ---------------- */
  const [sortBy, setSortBy] = useState("");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(20000);

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

  /* ---------------- HANDLERS ---------------- */
  const toggleValue = (value, list, setList) => {
    setList(
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
    );
  };

  const clearFilters = () => {
    setSortBy("");
    setBrands([]);
    setCategories([]);
    setPrice(20000);
  };

  /* ---------------- FILTER + SORT LOGIC ---------------- */
  const filteredProducts = useMemo(() => {
    let data = [...productsData];

    // Brand filter
    if (brands.length) {
      data = data.filter((p) => brands.includes(p.brand));
    }

    // Category filter
    if (categories.length) {
      data = data.filter((p) => categories.includes(p.category));
    }

    // Price filter
    data = data.filter((p) => p.finalPrice <= price);

    // ⭐ TOP PRODUCTS (ONLY 5 STAR)
    if (sortBy === "top") {
      data = data.filter((p) => p.rateCount === 5);
    }

    // Price sorting
    if (sortBy === "low") {
      data.sort((a, b) => a.finalPrice - b.finalPrice);
    }

    if (sortBy === "high") {
      data.sort((a, b) => b.finalPrice - a.finalPrice);
    }

    return data;
  }, [brands, categories, price, sortBy]);

  return (
    <div className={styles.wrapper}>
      <div className="container-fluid">
        <div className="row">
          {/* ================= SIDEBAR ================= */}
          <div className="col-lg-2 col-md-3">
            <div className={styles.sidebar}>
              <button className={styles.clearBtn} onClick={clearFilters}>
                Clear Filters
              </button>

              {/* SORT BY */}
              <h6 className={styles.heading}>Sort By</h6>
              <ul className={styles.list}>
                <li onClick={() => setSortBy("")}>Latest</li>
                <li>Featured</li>
                <li
                  onClick={() => setSortBy("top")}
                  className={sortBy === "top" ? styles.red : ""}
                >
                  Top Products
                </li>

                <li onClick={() => setSortBy("low")} className={styles.red}>
                  Price (Lowest First)
                </li>
                <li onClick={() => setSortBy("high")} className={styles.red}>
                  Price (Highest First)
                </li>
              </ul>

              {/* FILTER BY */}
              <h6 className={styles.heading}>Filter By</h6>

              {/* BRANDS */}
              <p className={styles.subHeading}>Brands</p>
              {["JBL", "boAt", "Sony"].map((b) => (
                <label key={b} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={brands.includes(b)}
                    onChange={() => toggleValue(b, brands, setBrands)}
                  />
                  {b}
                </label>
              ))}

              {/* CATEGORY */}
              <p className={styles.subHeading}>Category</p>
              {["Headphones", "Earbuds", "Earphones", "Neckbands"].map((c) => (
                <label key={c} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={categories.includes(c)}
                    onChange={() => toggleValue(c, categories, setCategories)}
                  />
                  {c}
                </label>
              ))}

              {/* PRICE */}
              <p className={styles.subHeading}>Price</p>
              <p className="text-white">₹{price}</p>
              <input
                type="range"
                min="0"
                max="20000"
                value={price}
                onChange={(e) => setPrice(+e.target.value)}
                className={styles.range}
              />
            </div>
          </div>

          {/* ================= PRODUCTS ================= */}
          <div className="col-lg-10 col-md-9">
            <div className="row g-4">
              {filteredProducts.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                  <div className={styles.card}>
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className={styles.img}
                      />
                    </Link>

                    <div className={styles.body}>
                      <div className={styles.rating}>
                        {renderStars(item.rateCount)}
                      </div>

                      <h6>{item.title}</h6>
                      <p className="text-secondary small">{item.info}</p>

                      <div className={styles.priceRow}>
                        <span className={styles.final}>₹{item.finalPrice}</span>
                        <span className={styles.old}>
                          ₹{item.originalPrice}
                        </span>
                      </div>
                    </div>

                    <button onClick={() => addToCart(item)} className={styles.cartBtn}>Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
