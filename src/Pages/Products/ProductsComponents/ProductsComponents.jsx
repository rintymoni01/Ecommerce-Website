import { useEffect, useState } from "react";
import { getData } from "../../../Contex/DataContex";
import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard";

const ProductsComponents = () => {
  const { data, fatchAllProducts } = getData();
  const [search , setSearch] = useState("")
  const [category , setCategory] =useState ("All")
  const [brand, setBrand] = useState("All")
  const [priceRange ,setPriceRange]= useState([0,500])


  useEffect(() => {
    fatchAllProducts();
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
          <div className="flex gap-8">
            
            <FilterSection search={search} setSearch={setSearch} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} />

            <div className="grid grid-cols-4 mt-10 gap-7">
              {data.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <img
              src="/Image/sample.gif"
              alt="Loading..."
              className="w-20 h-20"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsComponents;