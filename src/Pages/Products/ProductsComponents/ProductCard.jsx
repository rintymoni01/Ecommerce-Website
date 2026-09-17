const ProductCard = ({product}) => {
    console.log(product);
    
  return (
    <div className="border relative border-gray-100 rounded-2xl hover:scale-105 hover:shadow-2xl h-max transition-all  cursor-pointer">
      <img src={product.images} alt=""  className="bg-gray-100 aspect-square"/>
      <h1 className="line-clamp-2 py-1 font-semibold">{product.title}</h1>
      <p className="my-1 text-lg text-gray-800 font-bold">${product.price}</p>
      
    </div>
  );
};

export default ProductCard;
