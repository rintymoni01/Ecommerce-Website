import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "./Breadcrums";

const SingleProducts = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState("");
  console.log(params);
};
const getsingleProduct = async () => {
  try {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${params.id}`,
    );
    console.log(res);
    const product = res.data.product;
    setSingleProduct(product);
    console.log(product);
  } catch (error) {
    console.log(error);
  }
  useEffect(() => {
    getsingleProduct();
  }, []);

  return (
    <>
      {singleProduct ? (
        <div className="px-4 pb-4 md:px-0">
            <Breadcrums title={singleProduct.title} />
            <div className="mx-w-6xl md-p-6 mx-auto grid grid-cols-2  gap-10">

            </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <img src="/Image/sample.gif" alt="Loading..." className="w-20 h-20" />
        </div>
      )}
    </>
  );
};

export default SingleProducts;
