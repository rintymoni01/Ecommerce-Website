import { FaFacebook, FaInstagramSquare, FaPinterest, FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
       <div className="py-10">
         <div className="bg-[#0f0c29] h-[35vh] ">
           <div className=" flex justify-between items-center container mx-auto px-4  pt-6">
            
<div>
    <h3 className="text-red-500 text-3xl font-bold font-serif ">Rinty</h3>
    <p className="text-sm text-gray-400 pb-3 pt-4">Enhance Your Beauty with Premium Cosmetics.</p>
<p className="text-xs text-gray-400">123 Beauty Street, New York, NY 10001</p>
<p className="text-xs text-gray-400 py-2">Email: support@glowea.com</p>
<p className="text-xs text-gray-400">Phone: (123) 456-7890</p>
</div>




<div >
   <p className="text-xl font-semibold text-gray-400 pb-2"> Customer Service</p>
   <p className="text-xs text-gray-400">Contact Us</p>
   <p className="text-xs text-gray-400 py-2"> Shipping & Returns</p>
   <p className="text-xs text-gray-400">FAQs</p>
   <p className="text-xs text-gray-400 py-2">Order Tracking</p>
   <p className="text-xs text-gray-400">Beauty Guide</p>
</div>

<div>
    <h3>Follow Us</h3>
    <div>
        <FaFacebook />
        <FaInstagramSquare />
        <FaTwitterSquare />
        <FaPinterest />
    </div>
</div>
           </div>
        </div>
       </div>
    );
};

export default Footer;