
import { createContext, useContext, useState } from "react";

const CartContex = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItem((prevCart) => {
      const itemInCart = prevCart.find(
        (item) => item.id === product.id
      );

      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItem((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItem((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product
  const removeFromCart = (id) => {
    setCartItem((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  return (
    <CartContex.Provider
      value={{
        cartItem,
        setCartItem,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContex.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContex);
};

