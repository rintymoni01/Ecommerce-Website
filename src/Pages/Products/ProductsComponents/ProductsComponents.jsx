import { useEffect, useState } from "react";
import { getData } from "../../../Contex/DataContex";
import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard";
import Pagnation from "./Pagnation";

const ProductsComponents = () => {
  const { data, fatchAllProducts } = getData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fatchAllProducts();
  }, []);

  // Category change (ফিল্টার করলে পেজ ১ এ নিয়ে আসার জন্য setPage(1) যুক্ত করা হয়েছে)



  const handelCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  // Brand change (ফিল্টার করলে পেজ ১ এ নিয়ে আসার জন্য setPage(1) যুক্ত করা হয়েছে)


  const handelBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
  };

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };



  const filterData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );
    const dynamicPage = Math.ceil(filterData?.length / 8)

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
          <div>
            <div className="flex gap-8">
              {/* Filter Section */}
              <FilterSection
                search={search}
                setSearch={(val) => {
                  setSearch(val);
                  setPage(1); // সার্চ করার সময় পেজ ১ এ সেট হবে
                }}
                brand={brand}
                setBrand={setBrand}
                priceRange={priceRange}
                setPriceRange={(val) => {
                  setPriceRange(val);
                  setPage(1); // প্রাইস চেঞ্জ হলেও পেজ ১ এ সেট হবে
                }}
                category={category}
                setCategory={setCategory}
                handelCategoryChange={handelCategoryChange}
                handelBrandChange={handelBrandChange}
              />

              {/* Products Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-4 mt-10 gap-7">
                  {filterData?.slice(page * 8 - 8, page * 8).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>

            {/* Pagination Component কে সঠিক জায়গায় রাখা হয়েছে */}
            <div className="mt-8">
              <Pagnation 
                pageHandler={pageHandler} 
                page={page} 
                totalProducts={filterData?.length || 0} 
              />
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
