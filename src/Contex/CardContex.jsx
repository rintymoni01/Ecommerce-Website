
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

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
      
 toast.success("products is added to cart")
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
              ...item,quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    
    setCartItem((prevCart) =>
      prevCart.map((item) =>
          item.id === id
            ? {...item,quantity: item.quantity - 1,}: item
            
        )
        .filter((item) => item.quantity > 0)
       
    );
  };

  // Remove product
  const removeFromCart = (id) => {
    toast.success("Products is deleted from cart")
    setCartItem((prevCart) =>
      prevCart.filter((item) => item.id !== id)
     
    );
  };
 
 


   const updateQuantity = (cartItem , productId , action) =>{
    
 cartItem.map(item =>{
  if(item.id === productId){
    let newUnit = item.quantity;
    if(action === "increase"){
      newUnit = newUnit + 1
      toast.success("pQuantity is increased!")
    }else if (action === "decrease"){
      newUnit = newUnit -1
       toast.success("pQuantity is decreased!")
    }
    return newUnit >0 ? {...item, quantity: newUnit} : null
  }
  return item ;
 }).filter (item=> item != null)  //  remove item quantity 0
  }
  return (
    <CartContex.Provider
      value={{
        cartItem,
        setCartItem,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContex.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContex);
};

