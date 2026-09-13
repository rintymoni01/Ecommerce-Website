import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div className="bg-white py-3 shadow-2xl">
     
      <div>
        <Link to={"/"} className="text-3xl font-semibold">
               {/* logo */}
        <span className="text-red-500">R</span>inty
      </Link>
      <div>
        <ul></ul>
        
      </div>
      </div>
    </div>
  );
};

export default Navber;
