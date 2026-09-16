import { useContext, useEffect } from "react";
import { DataContex } from "../Contex/DataContex";

const Carousel = () => {
  const { fatchAllProducts } = useContext(DataContex);

  useEffect(() => {
    fatchAllProducts();
  }, []);

  return (
    <div>
      Carousel
    </div>
  );
};

export default Carousel;