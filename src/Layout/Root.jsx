import { Outlet } from "react-router";
import TopHeader from "../Components/SheardComponents/TopHeader";

const Root = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;