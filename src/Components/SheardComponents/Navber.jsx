import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
const Navber = () => {
  return (
    <div className="bg-white py-3 shadow-2xl">
     
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to={"/"} className="text-3xl font-bold">
               {/* logo */}
        <span className="text-red-500 font-serif">R</span>inty
      </Link>
      <div className="text-gray-700 flex items-center gap-1 cursor-pointer">
        <LuMapPin />
      </div>
      </div>
    </div>
  );
};

export default Navber;
