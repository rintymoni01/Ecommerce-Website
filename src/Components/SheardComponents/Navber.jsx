import { Link, NavLink } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline, IoCloseSharp } from "react-icons/io5";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useCart } from "../../Contex/CardContex";
import { useState } from "react";
import ResponcivedMenu from "../ResponcivedMenu";

const Navber = ({ location, getLocation, openDropdown, setOpenDropdown }) => {
  const { cartItem } = useCart();
  const [openNav, setOpenNav] = useState(false)
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <div className="bg-white py-3 shadow-2xl px-4 md:px-0 ">
      <div className="max-w-6xl mx-auto flex justify-between items-center ">
        {/* Logo + Address */}
        <div className="flex gap-7 items-center">
          <Link to="/" className="text-3xl font-bold">
            <span className="text-red-500 font-serif">SR</span>moni
          </Link>

          <div className="text-gray-700 md:flex hidden items-center gap-1 cursor-pointer">
            <LuMapPin className="text-red-500" />

            <span className="font-semibold">
              {location ? (
                <div className="-space-y-2">
                  <p>{location.country}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>

            <FaCaretDown onClick={toggleDropdown} />
          </div>
          {openDropdown ? (
            <div className="w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md">
              <h1 className="font-semibold mb-4 text-xl flex justify-between">
                Change Location{" "}
                <span onClick={getLocation}>
                  <IoCloseSharp />
                </span>
              </h1>
              <button
                onClick={getLocation}
                className="bg-red-500 text-white px-3 py-1 cursor-pointer hover:bg-red-400 "
              >
                Detect My Location
              </button>
            </div>
          ) : null}
        </div>

        {/* Navber */}
        <nav className="flex gap-7 items-center ">
          <ul className="md:flex gap-7 items-center font-semibold hidden">
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
              {cartItem.length}
            </span>
          </Link>

          {/* Login / User */}
         <div className="hidden md:block">
           <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md font-semibold">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
         </div>
         {
          openNav ? <HiMenuAlt3 onClick={()=>setOpenNav(false)} className="h-7 w-7 md:hidden"/>:<HiMenuAlt1 onClick={()=>setOpenNav(true)} className="h-7 w-7 md:hidden"/>
         }
        </nav>
       
      </div>
       <ResponcivedMenu openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
};

export default Navber;
