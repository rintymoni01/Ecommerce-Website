import axios from "axios";
import { createContext, useContext, useState } from "react";

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

  // Get unique category / brand
  const getUniqueCategory = (data, property) => {
    const newVal = data
      ?.map((curElem) => curElem[property])
      .filter(Boolean);

    return ["All", ...new Set(newVal)];
  };

  // Unique brand
  const brandOnlyData = getUniqueCategory(data, "brand");

  // Unique category
  const categoryOnlyData = getUniqueCategory(data, "category");

  return (
    <DataContex.Provider
      value={{
        data,
        setData,
        fatchAllProducts,
        categoryOnlyData,
        brandOnlyData,
      }}
    >
      {children}
    </DataContex.Provider>
  );
};

export const getData = () => useContext(DataContex);