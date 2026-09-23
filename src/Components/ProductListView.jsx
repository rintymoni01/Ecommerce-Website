import { useNavigate } from "react-router-dom";

const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-4 mt-2 rounded-md">
      <div className="bg-gray-100 gap-7 flex items-center rounded-md p-2 ">
        <img
          src={product.images}
          alt={product.title}
          className="h-60  w-60 rounded-md  cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`)}
        />
        <div className="space-y-2 ">
            <h1>Free Delivery Fri, is Apr Or Fastest Delivery Tomorrow, 17 Apr</h1>

        </div>
      </div>
    </div>
  );
};

export default ProductListView;
