import { useEffect } from "react";
import { getData } from "../Contex/DataContex";

const Category = () => {
  const { data, fatchAllProducts } = getData();

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });

    newVal = [...new Set(newVal)];

    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");

  console.log(categoryOnlyData);

  useEffect(() => {
    fatchAllProducts();
  }, []);

  return (
    <div className="bg-[#101829]">
      <div className="flex justify-around items-center px-4 py-7 gap-4 max-w-7xl mx-auto">
        {categoryOnlyData?.slice(0-6).map((items, index) => {
          return (
            <div key={index}>
              <button className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer">
                {items}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
