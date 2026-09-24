import Carousel from "../../Components/Carousel";
import Fetures from "./HomeComponents/Fetures";
import MidBanner from "./HomeComponents/MidBanner";


const Home = () => {
    return (
      
   <div className="overflow-x-hidden w-full max-w-full">
      <Carousel></Carousel>
     <MidBanner></MidBanner>
     <Fetures></Fetures>
   </div>
        
    );
};

export default Home;