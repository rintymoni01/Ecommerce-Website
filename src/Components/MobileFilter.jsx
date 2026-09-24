
import {FaFilter} from "react-icons/fa" 
const MobileFilter = () => {
    return (
        <div className="bg-gray-100 flex justify-between items-center md:hidden px-4 py-2 cursor-pointer mt-5">
            <h1 className="text-xl font-semibold ">Filter</h1>
            <FaFilter className="text-gray-800"/>
        </div>
    );
};

export default MobileFilter;