import axios from "axios";
import { createContext, useState } from "react";

export const DataContex = createContext(null);
export const DataProvider = ({ children }) => {
  const { data, setData } = useState();
  // fatching all products from api
  const fatchAllProducts = async () => {
    try {
       const res = await axios.get("https://dummyjson.com/products?limit=150") 
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <DataContex.Provider value={{ data, setData }}>
      {children}
    </DataContex.Provider>
  );
};
