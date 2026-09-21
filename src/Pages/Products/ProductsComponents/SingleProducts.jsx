import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProducts = () => {

  const params = useParams();
  const [singleProduct , setSingleProduct] =useState('')
  console.log(params);
};
const getsingleProduct = async () => {
  try {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${params.id}`,
    );
    console.log(res);
    const product = res.data.product;
   setSingleProduct(product)
console.log(product);



  } catch (error) {
    console.log(error);
  }
  useEffect(() => {
    getsingleProduct();
  }, []);

  return <div>hjjshs</div>;
};

export default SingleProducts;
