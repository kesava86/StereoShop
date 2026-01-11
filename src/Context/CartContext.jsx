import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.find((item) => item.id === action.payload.id);

      if (existing) {
        toast.info("Quantity increased");
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      toast.success("Product added to cart");
      return [...state, { ...action.payload, qty: 1 }];
    }

    case "DECREASE": {
      const item = state.find((i) => i.id === action.payload);

      if (item.qty > 1) {
        toast.info("Quantity decreased");
        return state.map((i) =>
          i.id === action.payload ? { ...i, qty: i.qty - 1 } : i
        );
      }

      toast.warn("Product removed from cart");
      return state.filter((i) => i.id !== action.payload);
    }

    case "REMOVE":
      toast.error("Product removed from cart");
      return state.filter((i) => i.id !== action.payload);

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const decreaseQty = (id) => dispatch({ type: "DECREASE", payload: id });

  const removeItem = (id) => dispatch({ type: "REMOVE", payload: id });

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseQty, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
