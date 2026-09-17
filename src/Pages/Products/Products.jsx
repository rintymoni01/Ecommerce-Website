import { getData } from "../../Contex/DataContex";


const Products = () => {
    const {data}= getData()
    return (
        <div>
           <div className="max-w-6xl mx-auto px-4 mb-10">
            {
                data?.length > 0 ? (
                    <div>

                    </div>
                ) : (
                    <div>
                        No items found
                    </div>
                )
            }

           </div>
        </div>
    );
};

export default Products;