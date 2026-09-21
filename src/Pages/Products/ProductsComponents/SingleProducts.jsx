
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "./Breadcrums";

const SingleProducts = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState(null);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${id}`
      );

      console.log(res.data);

      setSingleProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  return (
    <>
      {singleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <Breadcrums title={singleProduct.title} />

          <div className="max-w-6xl md:p-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Product Image */}
            <div className="w-full">
              <img
                src={singleProduct.images?.[0]}
                alt={singleProduct.title}
                className="rounded-2xl w-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div>
              <h1 className="md:text-3xl font-bold">
                {singleProduct.title}
              </h1>

              <p className="text-gray-500 mt-3">
                {singleProduct.description}
              </p>

              <h2 className="text-2xl font-bold mt-5">
                ${singleProduct.price}
              </h2>
            </div>

          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <img
            src="/Image/sample.gif"
            alt="Loading..."
            className="w-20 h-20"
          />
        </div>
      )}
    </>
  );
};

export default SingleProducts;

