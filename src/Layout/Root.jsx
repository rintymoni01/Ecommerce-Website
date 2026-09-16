

import { Outlet } from "react-router-dom";
import Navber from "../Components/SheardComponents/Navber";
import { useState } from "react";

const Root = () => {
    const [location,getLocation]=useState()
    const [openDropdown,setOpenDropdown]=useState()
    return (
        <div>
            <Navber location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} ></Navber>
           <Outlet></Outlet>
           
        </div>
    );
};

export default Root;