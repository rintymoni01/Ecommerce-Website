
import { getData } from '../../../Contex/DataContex';

const ProductsComponents = () => {
    const {data}= getData()
    return (
        <div>
              <div>
           <div className="max-w-6xl mx-auto px-4 mb-10">
            {
                data?.length > 0 ? (
                    <div className="flex gap-8">
                        <FilterSection />

                    </div>
                ) : (
                    <div>
                        No items found
                    </div>
                )
            }

           </div>
        </div>
        </div>
    );
};

export default ProductsComponents;