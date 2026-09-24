import { UserButton, useUser } from "@clerk/clerk-react";
import { FaUserCircle } from "react-icons/fa";

const ResponcivedMenu = ({ openNav, setOpenNav }) => {
  const {user}=useUser()
  return (
    <div
      className={`(openNav ? "left-0":"-left-[100%]") fixed top-0 bottom-0 z-20 flex h-screen w-[75%]  flex-col justify-between  bg-white px-8 pb-6 pt-16 rounded-r-xl text-black  shadow-md transition-all `}
    >
        <div>
            <div className=" flex items-center justify-start gap-3">
{
  user ? <UserButton size={50}/> : <FaUserCircle size={50}/>
}
<div>
  {/* <h1>{user.firstName}</h1> */}
  <h1>Hello</h1>
  <h1 className="text-sm text-slate-500">Premium User</h1>
</div>
            </div>
            <nav></nav>
        </div>
    </div>
  );
};

export default ResponcivedMenu;
