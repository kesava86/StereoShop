import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../Data/productsData";
import styles from "./SearchOverlay.module.css";

export default function SearchOverlay({ onClose }) {
  const boxRef = useRef(null);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  /*  DEBOUNCE SEARCH */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      const filtered = productsData.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  /*  CLICK OUTSIDE  */
  const handleOverlayClick = (e) => {
    if (boxRef.current && !boxRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div ref={boxRef} className={styles.searchBox}>
        <input
          autoFocus
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {results.length > 0 && (
          <div className={styles.results}>
            {results.map((item) => (
              <div
                key={item.id}
                className={styles.resultItem}
                onClick={() => {
                  navigate(`/product/${item.id}`);
                  onClose();
                }}
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
