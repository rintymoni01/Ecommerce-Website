import { getData } from "../../../Contex/DataContex";

const FilterSection = ({search , setSearch , brand ,setBrand , priceRange, setPriceRang , category, setCategory}) => {
  const { categoryOnlyData, brandOnlyData } = getData();
  return (
    <div className="bg-gray-100  mt-10 p-4 rounded-md h-max">
      <input
        type="text"
        placeholder="Search..." 
        value={search}
        onChange={(e)=> setSearch(e.target.value)}   
        className="bg-white p-2 rounded-md border-gray-400 border-2" />


                                        {/* category dara */}


      <h1 className=" mt-5 text-xl font-semibold">Category</h1>
      <div className="flex flex-col mt-3 gap-2 ">
        {categoryOnlyData?.slice(0, 7).map((item, index) => (
          <div key={index} className="flex gap-2">
            <input type="checkbox" name={item} checked ={category===item} value={item} onChange={} />
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
          value={brand}
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
            <label htmlFor="">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
            <input type="range"  name="" id="" value={priceRange[1]} onChange={(e)=>setPriceRang([setPriceRang[0], Number(e.target.value)])}/>

          </div>
          <button className="bg-red-500 text-white rounded-md px-3  py-1 mt-5 cursor-pointer">Reset Filters</button>


      </div>
    </div>
  );
};

export default FilterSection;
