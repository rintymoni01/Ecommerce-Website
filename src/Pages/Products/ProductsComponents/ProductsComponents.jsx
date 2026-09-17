import { useEffect } from "react";
import { getData } from "../../../Contex/DataContex";
import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard";

const ProductsComponents = () => {
  const { data, fatchAllProducts } = getData();

  useEffect(() => {
    fatchAllProducts();
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
          <div className="flex gap-8">
            
            <FilterSection />

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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