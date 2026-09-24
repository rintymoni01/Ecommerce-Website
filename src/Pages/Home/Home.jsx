import Carousel from "../../Components/Carousel";
import Fetures from "./HomeComponents/Fetures";
import MidBanner from "./HomeComponents/MidBanner";

const Home = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden px-0 sm:px-2 md:px-0">
      <Carousel />
      <MidBanner />
      <Fetures />
    </div>
  );
};

export default Home;