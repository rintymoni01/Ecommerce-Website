

const ProductListView = ({product}) => {
    return (
        <div className="space-y-4 mt-2 rounded-md">
            <div className="bg-gray-100 gap-7 flex items-center rounded-md p-2 ">
<img src={product.images} alt="" />
            </div>
        </div>
    );
};

export default ProductListView;