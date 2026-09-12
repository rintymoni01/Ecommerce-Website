import { Outlet } from "react-router";
import TopHeader from "../Components/SheardComponents/TopHeader";
import Navber from "../Components/SheardComponents/Navber";

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <TopHeader></TopHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;