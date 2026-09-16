import { Outlet } from "react-router-dom";
import Navber from "../Components/SheardComponents/Navber";
import { useEffect, useState } from "react";
import axios from "axios";

const Root = () => {
  const [location, setLocation] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        // console.log(latitude, longitude);

        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

        try {
          const response = await axios.get(url);

          const exactLocation = response.data.address;

          setLocation(exactLocation);
          setOpenDropdown(false);

          console.log(exactLocation);
        } catch (error) {
          // console.log(error);
        }
      },
      (error) => {
        // console.log("Location error:", error);
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>
      <Navber
        location={location}
        getLocation={getLocation}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />

      <Outlet />
    </div>
  );
};

export default Root;