
import {FaFilter} from "react-icons/fa" 
const MobileFilter = ({openFilter, setOpenFilter}) => {
    return (
      <div>
          <div className="bg-gray-100 flex justify-between items-center md:hidden px-4 py-2 cursor-pointer mt-5">
            <h1 className="text-xl font-semibold ">Filter</h1>
            <FaFilter onClick={()=>setOpenFilter(false)} className="text-gray-800"/>
        </div>
        {
            openFilter ? <div className="bg-gray-500 py-2 md:hidden">

            </div>:null
        }
      </div>
    );
};

export default MobileFilter;