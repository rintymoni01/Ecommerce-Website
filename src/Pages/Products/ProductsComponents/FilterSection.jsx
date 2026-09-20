import { getData } from "../../../Contex/DataContex";

const FilterSection = ({
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

  const handleReset = () => {
    setSearch("");
    setBrand("All");
    setPriceRange([0, 500]);
  };

  return (
    <div className="bg-gray-100 mt-10 p-4 rounded-md h-max w-68">

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
          <div key={index} className="flex gap-2 items-center">
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
        className="bg-white w-full border-gray-200 border-2 rounded-md p-2"
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
          Price Range: ${priceRange?.[0] ?? 0} - $
          {priceRange?.[1] ?? 5000}
        </label>

        <input
          type="range"
          min="0"
          max="500"
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
        
        className="bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer"
        onClick={()=>{setSearch ("") ; setCategory('All'); setBrand('All'); setPriceRange([0,5000])}}
      >

        Reset Filters
      </button>

    </div>
  );
};

export default FilterSection;