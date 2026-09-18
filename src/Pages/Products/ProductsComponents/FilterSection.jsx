import { getData } from "../../../Contex/DataContex";

const FilterSection = () => {
  const { categoryOnlyData, brandOnlyData } = getData();
  return (
    <div className="bg-gray-100  mt-10 p-4 rounded-md h-max">
      <input
        type="text"
        placeholder="Search..."
        className="bg-white p-2 rounded-md border-gray-400 border-2" />


                                        {/* category dara */}


      <h1 className=" mt-5 text-xl font-semibold">Category</h1>
      <div className="flex flex-col mt-3 gap-2 ">
        {categoryOnlyData?.slice(0, 7).map((item, index) => (
          <div key={index} className="flex gap-2">
            <input type="checkbox" />
            <button className="cursor-pointer uppercase">{item}</button>
            {/* Apnar HTML content ekhane thakbe */}
          </div>
        ))}
      </div>
                                 {/* brand only data */}

      <div>
        <h1 className=" mt-5 text-xl font-semibold mb-3">Brand</h1>
        <select
          name=""
          id=""
          className="bg-white w-full border-gray-200 border-2 rounded-md p-2 "
        >
          {brandOnlyData?.map((item, index) => {
            return (
              <option key="index" value={item}>
                {item}
              </option>
            );
          })}
        </select>

                                   {/* price reatting */}

          <h1 className=" mt-5 text-xl font-semibold mb-3">Price Range</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Price Range: $0 - $5000</label>
            <input type="range"  name="" id="" />

          </div>
          <button className="bg-red-500 text-white rounded-md px-3  py-1 mt-5 cursor-pointer">Reset Filters</button>


      </div>
    </div>
  );
};

export default FilterSection;
