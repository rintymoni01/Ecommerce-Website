

import { Await, Outlet } from "react-router-dom";
import Navber from "../Components/SheardComponents/Navber";
import { useState } from "react";

const Root = () => {
    const [location,getLocation]=useState()
    const [openDropdown,setOpenDropdown]=useState(false)
    const getLocation =async ()=>{
        navigator.geolocation.getCurrentPosition(async pos=>{
            const{latiyude,longitude}=pos.coords 
            console.log(TbWorldLatitude,longitude);
            const url="https.//nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json"
            try{
                const location=Await axios.get(url)
                const 
            }
            
        })
    }

    return (
        <div>
            <Navber location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} ></Navber>
           <Outlet></Outlet>
           
        </div>
    );
};

export default Root;