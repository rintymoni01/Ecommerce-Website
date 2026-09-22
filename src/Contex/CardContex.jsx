import { createContext, useContext, useState } from "react";

const CartContex = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const itemInCart = cartItem.find((item) => item.id === product.id);
    if (itemInCart) {
      // Increase quantity if already in cart
      const updatedCart = cartItem.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCartItem(updatedCart);
    } else {
      setCartItem([
        ...cartItem,
        {...product, quantity: 1,
        },
      ]);
    }
    setCartItem([...cartItem, product]);
  };

  return (
    <CartContex.Provider
      value={{
        cartItem,
        setCartItem,
        addToCart,
      }}
    >
      {children}
    </CartContex.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContex);
};
