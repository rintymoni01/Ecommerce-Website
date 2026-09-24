import { useState } from "react";
import { FaFilter, FaChevronDown } from "react-icons/fa";
import { getData } from "../Contex/DataContex";

const MobileFilter = ({
  openFilter,
  setOpenFilter,
  search,
  setSearch,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  handelCategoryChange,
  handelBrandChange,
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
window.scrollTo(0,0)
  return (
    <div className="md:hidden">
      {/* Filter Button */}
      <div
        onClick={() => setOpenFilter(!openFilter)}
        className="bg-gray-100 flex justify-between items-center px-4 py-3 overflow-hidden cursor-pointer mt-5 rounded-md shadow-sm"
      >
        <h1 className="text-xl font-semibold">Filter</h1>
        <FaFilter className="text-gray-800" />
      </div>

      {/* Mobile Filter Options */}
      {openFilter && (
        <div className="bg-gray-100 p-4 mt-2 rounded-md space-y-4">

          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white p-2 rounded-md border-gray-300 border w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Category */}
          <div>
            <h1 className="text-lg font-semibold mb-2">Category</h1>
            <div className="flex flex-col text-sm gap-2 max-h-40 overflow-y-auto pr-2">
              {categoryOnlyData?.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="category"
                    value={item}
                    checked={category === item}
                    onChange={handelCategoryChange}
                    className="accent-red-500 cursor-pointer"
                  />
                  <label className="cursor-pointer uppercase text-gray-700">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Brand - Custom Dropdown to fix floating issue */}
          <div>
            <h1 className="text-lg font-semibold mb-2">Brand</h1>
            <div className="relative">
              <div
                onClick={() => setShowBrandDropdown(!showBrandDropdown)}
                className="bg-white border border-gray-300 rounded-md p-4 flex justify-between items-center cursor-pointer text-sm font-medium uppercase"
              >
                <span>{brand || "All Brands"}</span>
                <FaChevronDown className={`text-xs transition-transform ${showBrandDropdown ? "rotate-180" : ""}`} />
              </div>

              {showBrandDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-120 overflow-y-auto z-30">
                  {brandOnlyData?.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setBrand(item);
                        setShowBrandDropdown(false);
                      }}
                      className="p-2.5 text-sm uppercase hover:bg-red-50 hover:text-red-500 cursor-pointer border-b border-gray-100 last:border-none"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h1 className="text-lg font-semibold mb-2">Price Range</h1>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">
                Price: ${priceRange?.[0] ?? 0} -${priceRange?.[1] ?? 5000}
              </label>
              <input
                type="range"
                min="0"
                max="5000"
                className="w-full accent-red-500 cursor-pointer"
                value={priceRange?.[1] ?? 5000}
                onChange={(e) =>
                  setPriceRange([
                    priceRange?.[0] ?? 0,
                    Number(e.target.value),
                  ])
                }
              />
            </div>
          </div>

          {/* Reset Button */}
          <button
            className=" bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer"
            onClick={() => {
              setSearch("");
              setCategory("All");
              setBrand("All");
              setPriceRange([0, 5000]);
              setOpenFilter(false);
            }}
          >
            Reset Filters
          </button>

        </div>
      )}
    </div>
  );
};

export default MobileFilter;