import { createContext, useState } from "react";

export const CartContex = createContext (null)

export const CartProvider = ({children})=> {
const [cartItem , setCartItem] =useState([])
return <CartContex.Provider value={'cartItem , setCartItem'}>
    {children}
</CartContex.Provider>
}