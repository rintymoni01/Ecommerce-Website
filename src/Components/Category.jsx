
import { useNavigate } from "react-router-dom";
import { getData } from "../Contex/DataContex";

const Category = () => {
  const {categoryOnlyData} = getData();
const navigate =useNavigate()
const {data}=getData()
  const getUniqueCategory = (data, property) => {
    const newVal = data
      ?.map((curElem) => curElem[property])
      .filter(Boolean);

    return [...new Set(newVal)];
  };
  return (
    <div className="bg-[#101829]">
      <div className="flex justify-around  flex-wrap items-center px-4 py-7 gap-4 max-w-7xl mx-auto">
        {categoryOnlyData?.slice(0-6).map((items, index) => {
          return (
            <div key={index}>
              <button onClick={()=> navigate (`category/${items}`)} className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer">
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
