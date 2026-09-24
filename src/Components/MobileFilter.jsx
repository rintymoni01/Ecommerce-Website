
import { FaFilter } from "react-icons/fa";
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

  return (
    <div className="md:hidden">
      {/* Filter Button */}
      <div
        onClick={() => setOpenFilter(!openFilter)}
        className="bg-gray-100 flex justify-between items-center px-4 py-3 overflow-hidden cursor-pointer mt-5 rounded-md"
      >
        <h1 className="text-xl font-semibold">Filter</h1>

        <FaFilter className="text-gray-800" />
      </div>

      {/* Mobile Filter Options */}
      {openFilter && (
        <div className="bg-gray-100 p-4 mt-2 rounded-md">

          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white p-2 rounded-md border-gray-400 border-2 w-full"
          />

          {/* Category */}
          <h1 className="mt-5 text-xl font-semibold">
            Category
          </h1>

          <div className="flex flex-col text-sm mt-3 gap-2">
            {categoryOnlyData?.map((item, index) => (
              <div
                key={index}
                className="flex gap-2 items-center"
              >
                <input
                  type="checkbox"
                  name="category"
                  value={item}
                  checked={category === item}
                  onChange={handelCategoryChange}
                />

                <label className="cursor-pointer uppercase">
                  {item}
                </label>
              </div>
            ))}
          </div>

          {/* Brand */}
          <h1 className="mt-5 text-xl font-semibold mb-3">
            Brand
          </h1>

          <select
  value={brand}
  onChange={handelBrandChange}
  className="bg-white w-full min-w-0 max-w-full border-gray-200 border-2 rounded-md p-2 overflow-hidden"
>
            {brandOnlyData?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          {/* Price Range */}
          <h1 className="mt-5 text-xl font-semibold mb-3">
            Price Range
          </h1>

          <div className="flex flex-col gap-2">

            <label>
              Price Range: $
              {priceRange?.[0] ?? 0}
              {" - "}
              $
              {priceRange?.[1] ?? 5000}
            </label>

            <input
              type="range"
              min="0"
              max="5000"
              className="transition-all w-[200px]"
              value={priceRange?.[1] ?? 5000}
              onChange={(e) =>
                setPriceRange([
                  priceRange?.[0] ?? 0,
                  Number(e.target.value),
                 
                ])
              }
            />

          </div>

          {/* Reset */}
          <button
            className="bg-red-500 hover:bg-red-600 text-white rounded-md px-3 py-2 mt-5 cursor-pointer"
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

