import { useEffect, useState } from "react";
import { getData } from "../../../Contex/DataContex";
import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard";
import Pagnation from "./Pagnation";
import MobileFilter from "../../../Components/MobileFilter";


const ProductsComponents = () => {
  const { data, fatchAllProducts } = getData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter]=useState(false)

  useEffect(() => {
    fatchAllProducts();
    window.scrollTo(0,0)
  }, []);

  // Category change 



  const handelCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
    setOpenFilter(false)
  };


  // Brand change 


  const handelBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
    setOpenFilter(false)
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
      <MobileFilter openFilter={openFilter} setOpenFilter={setOpenFilter} search={search}
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
                handelBrandChange={handelBrandChange}></MobileFilter>
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
{
  filterData?.length > 0 ? (
    <div className="flex flex-col gap-6 items-center">
      
                <div className="grid grid-cols-2 md:grid-cols-4 mt-10 gap-4 md:gap-7">
                  {filterData?.slice(page * 8 - 8, page * 8).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                 <Pagnation 
                pageHandler={pageHandler} 
                page={page} 
                dynamicPage={dynamicPage}
                totalProducts={filterData?.length || 0} 
              />
              </div>
  
  ):(
    <div className="flex justify-center items-center md:h-[60px] md:w-[900px] mt-10">
     
    </div>
  )
}
              {/* Products Grid */}
             
            </div>

            {/* Pagination Component কে সঠিক জায়গায় রাখা হয়েছে */}
            <div className="mt-8">
             
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
