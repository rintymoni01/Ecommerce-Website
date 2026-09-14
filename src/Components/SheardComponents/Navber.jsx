import { Link, NavLink } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navber = () => {
  const location = false;

  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo + Address */}
        <div className="flex gap-7 items-center">

          <Link to="/" className="text-3xl font-bold">
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

        {/* Navbar */}
        <nav className="flex gap-7 items-center">

          <ul className="flex gap-7 items-center font-semibold">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>

          </ul>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <IoCartOutline className="h-7 w-7" />

            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              0
            </span>
          </Link>

          {/* Login / User */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md font-semibold">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>

        </nav>
      </div>
    </div>
  );
};

export default Navber;