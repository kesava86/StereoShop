import { useCart } from "../Context/CartContext";
import { IoTrashOutline } from "react-icons/io5";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

export default function Cart() {
  const navigate = useNavigate();


  const { cart, addToCart, decreaseQty, removeItem } = useCart();

  if (cart.length === 0) {
    return (
      <div className={styles.emptyWrapper}>
        <IoCartOutline size={80} className={styles.emptyIcon} />
        <h4>Your Cart is Empty</h4>

        <button
          className={styles.shopBtn}
          onClick={() => navigate("/products")}
        >
          Start Shopping
        </button>
      </div>
    );
  }

  const originalPrice = cart.reduce(
    (sum, i) => sum + i.originalPrice * i.qty,
    0
  );

  const finalPrice = cart.reduce((sum, i) => sum + i.finalPrice * i.qty, 0);

  const discount = originalPrice - finalPrice;

  return (
    <div className={styles.cartWrapper}>
      <div className="container">
        <div className="row">
          {/* LEFT CART ITEMS */}
          <div className="col-md-8">
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.images[0]} alt={item.title} />

                <div className="flex-grow-1">
                  <h6 className="text-white">{item.title}</h6>

                  <p>
                    ₹{item.finalPrice}
                    <span className={styles.old}>₹{item.originalPrice}</span>
                  </p>

                  <div className={styles.qtyBox}>
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>

                <IoTrashOutline
                  className={styles.delete}
                  onClick={() => removeItem(item.id)}
                />
              </div>
            ))}
          </div>

          {/* RIGHT SUMMARY */}
          <div className="col-md-4">
            <div className={styles.summary}>
              <h5>Order Summary ({cart.length} items)</h5>

              <div>
                <span>Original Price</span>
                <span>₹{originalPrice}</span>
              </div>

              <div className={styles.discount}>
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>

              <div>
                <span>Delivery</span>
                <span className="text-success">Free</span>
              </div>

              <hr />

              <div className={styles.total}>
                <span>Total Price</span>
                <span>₹{finalPrice}</span>
              </div>

              <button className={styles.checkout}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
