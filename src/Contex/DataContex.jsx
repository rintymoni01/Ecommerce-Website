import axios from "axios";
import { createContext, useState } from "react";

export const DataContex = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Fetching all products from API
  const fatchAllProducts = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products?limit=150"
      );

      console.log(res);

      const productsData = res.data.products;

      setData(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContex.Provider
      value={{
        data,
        setData,
        fatchAllProducts,
      }}
    >
      {children}
    </DataContex.Provider>
  );
};