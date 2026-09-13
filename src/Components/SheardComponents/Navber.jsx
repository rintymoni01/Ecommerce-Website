import { Link, NavLink } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
const Navber = () => {
  const location = false;
  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex gap-7 items-center">
          <Link to={"/"} className="text-3xl font-bold">
            {/* logo */}
            <span className="text-red-500 font-serif">R</span>inty
          </Link>
          <div className="text-gray-700 flex items-center gap-1 cursor-pointer">
            <LuMapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? <div></div> : "Add Address"}
            </span>
            <FaCaretDown />
          </div>
        </div>
        <nav>
          <ul className="flex gap-7 items-center font-semibold">
            <NavLink
              to={"/"}
              className={({isActive}) =>
                `${isActive ? "border-b-3 transition-all border-red-500": "text-black"}`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink to={"/products"}>
              <li>Products</li>
            </NavLink>
            <NavLink to={"/about"}>
              <li>About</li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li>Contact</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navber;
