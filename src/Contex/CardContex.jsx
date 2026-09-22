import { createContext, useContext, useState } from "react";

const CartContex = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    setCartItem( [...cartItem, product])
   
    

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