import axios from "axios";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductListView from "../Components/ProductListView";
// import Loading from "../assets/loading.webm"; // <-- Eta import kore nio (path tomar project onujayi change hobe)

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);
  const params = useParams();
  const category = params.category;

  const getFilterData = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      const data = res.data.products;
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilterData();
  }, [category]); // <-- dependency-te category add kore dile bhalo hoy

  return (
    <div>
      {searchData.length > 0 ? (
        <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
          <button className="bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center">
            <ChevronLeft /> Back
          </button>
          {searchData.map((product, index) => {
            return <ProductListView key={index} product={product} />;
          })}
        </div>
      ) : (
        <div className="items-center flex justify-center h-[400px]">
          {/* <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video> */}
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;