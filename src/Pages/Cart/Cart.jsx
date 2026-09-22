import { useCart } from "../../Contex/CardContex";



const Cart = () => {
    const {cartItem} = useCart()
    return (
        <div className="mt-10 max-w-6xl mx-auto mb-5">
      {
        cartItem.length > 0 ? <div>
            <h1 className="font-bold text-2xl ">My Cart ({cartItem.length})</h1>
            <div>
                <div className="mt-10">
                    {
                        cartItem.map((item, index)=>{
                            return <div key={index}>
                                <div>
                                    
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>: <div>cart is empty</div>
      }
        </div>
    );
};

export default Cart;