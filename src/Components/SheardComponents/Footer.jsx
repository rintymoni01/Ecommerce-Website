import {
  FaFacebook,
  FaInstagramSquare,
  FaPinterest,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0f0c29] h-[35vh] ">
      <div className=" flex justify-between  container mx-auto px-4  py-8">
        <div>
          <h3 className="text-red-500 text-3xl font-bold font-serif ">Rinty</h3>
          <p className="text-sm text-gray-400 pb-3 pt-4">
            Enhance Your Beauty with Premium Cosmetics.
          </p>
          <p className="text-xs text-gray-400">
            123 Beauty Street, New York, NY 10001
          </p>
          <p className="text-xs text-gray-400 py-2">
            Email: support@glowea.com
          </p>
          <p className="text-xs text-gray-400">Phone: (123) 456-7890</p>
        </div>

        <div>
          <p className="text-xl font-sans text-gray-400 pb-2">
            {" "}
            Customer Service
          </p>
          <p className="text-xs text-gray-400">Contact Us</p>
          <p className="text-xs text-gray-400 py-2"> Shipping & Returns</p>
          <p className="text-xs text-gray-400">FAQs</p>
          <p className="text-xs text-gray-400 py-2">Order Tracking</p>
          <p className="text-xs text-gray-400">Beauty Guide</p>
        </div>

        <div>
          <h3 className="text-xl font-sans text-gray-400 pb-2">Follow Us</h3>
          <div className="flex gap-2 items-center text-gray-400">
            <FaFacebook />
            <FaInstagramSquare />
            <FaTwitterSquare />
            <FaPinterest />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-sans text-gray-400 pb-2">
            Stay Beautiful with Us
          </h3>
          <p className="text-xs text-gray-400 pb-4">
            Subscribe for exclusive beauty tips, new arrivals, special offers,
            and more.
          </p>

<div className="join ">
  <div>
    <label className="input validator join-item bg-transparent">
      <svg className="h-[1em] text-gray-400 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input type="email" placeholder="mail@site.com" required  className="text-gray-400 placeholder:text-gray-400" />
    </label>
    <div className="validator-hint hidden ">Enter valid email address</div>
  </div>
  <button className="btn btn-neutral bg-red-500 text-white join-item">Subscribe</button>
</div>


        </div>
      </div>
      <hr className="text-gray-800" />
      <div className="border-t border-gray-700 pt-6">
        <p className="text-center text-xs text-gray-400">
          © 2026 <span className="text-red-500">Glowéa</span>. All rights
          reserved. | Beauty made simple.
        </p>
      </div>
    </div>
  );
};

export default Footer;
