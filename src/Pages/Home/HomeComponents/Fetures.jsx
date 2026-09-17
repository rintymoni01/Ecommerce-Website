
const fetures =[
    {icon: Truck, text :'Free Shipping ' , subText: 'On orders over $100'},
     {icon: Lock, text :'Secure Payment' , subText: '100% Protected payments'},
      {icon: RotateCcw, text :'Easy Returns ' , subText: '30-day Return Policy'},
       {icon: Clock, text :'24/7 Support ' , subText: 'Dadicated Customer Service'},
       
]
const Fetures = () => {
    return (
        <div className="bg-gray-100  py-8 px-4 sm:px-6  lg:px-8">
            <div className="max:w-7xl mx-auto">
                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
                    {
                        fetures.map((fetures, index)=>{

                        })
                    }

                </div>

            </div>
            
        </div>
    );
};

export default Fetures;