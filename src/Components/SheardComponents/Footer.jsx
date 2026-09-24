import {
  FaFacebook,
  FaInstagramSquare,
  FaPinterest,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0f0c29] min-h-[35vh]">
      <div
        className="
          container mx-auto px-4 py-8
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:flex
          lg:justify-between
          gap-8 lg:gap-4
        "
      >
        {/* Brand */}
        <div className="lg:max-w-[250px]">
          <h3 className="text-red-500 text-3xl font-bold font-serif">
            Rinty
          </h3>

          <p className="text-sm text-gray-400 pb-3 pt-4">
            Enhance Your Beauty with Premium Cosmetics.
          </p>

          <p className="text-xs text-gray-400">
            123 Beauty Street, New York, NY 10001
          </p>

          <p className="text-xs text-gray-400 py-2 break-all">
            Email: support@glowea.com
          </p>

          <p className="text-xs text-gray-400">
            Phone: (123) 456-7890
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <p className="text-xl font-sans text-gray-400 pb-2">
            Customer Service
          </p>

          <p className="text-xs text-gray-400">Contact Us</p>

          <p className="text-xs text-gray-400 py-2">
            Shipping & Returns
          </p>

          <p className="text-xs text-gray-400">FAQs</p>

          <p className="text-xs text-gray-400 py-2">
            Order Tracking
          </p>

          <p className="text-xs text-gray-400">
            Beauty Guide
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-sans text-gray-400 pb-2">
            Follow Us
          </h3>

          <div className="flex gap-3 items-center text-gray-400 text-xl">
            <FaFacebook />
            <FaInstagramSquare />
            <FaTwitterSquare />
            <FaPinterest />
          </div>
        </div>

        {/* Newsletter */}
       {/* Newsletter */}
<div className="lg:max-w-[350px]">
  <h3 className="text-xl font-sans text-gray-400 pb-2">
    Stay Beautiful with Us
  </h3>

  <p className="text-xs text-gray-400 pb-4 leading-5">
    Subscribe for exclusive beauty tips, new arrivals, special offers,
    and more.
  </p>

  <div className="flex w-full">
    {/* Input */}
   <label className="flex items-center gap-2 bg-transparent border border-gray-500 rounded-l-md px-3 h-10 flex-1 min-w-0">
  <svg
    className="h-4 w-4 text-gray-400 shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
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

  <input
    type="email"
    placeholder="mail@site.com"
    required
    className="bg-transparent !bg-transparent outline-none border-none text-gray-300 placeholder:text-gray-400 w-full min-w-0 text-sm autofill:bg-transparent"
  />
</label>
    {/* Subscribe */}
    <button
      type="submit"
      className="bg-red-500 hover:bg-red-600 text-white px-4 h-10 rounded-r-md text-sm font-semibold shrink-0 transition"
    >
      Subscribe
    </button>
  </div>
</div>
      </div>

      {/* Bottom */}
      <hr className="text-gray-800" />

      <div className="border-t border-gray-700 pt-6 pb-5 px-4">
        <p className="text-center text-xs text-gray-400 leading-5">
          © 2026{" "}
          <span className="text-red-500">Glowéa</span>. All rights
          reserved. | Beauty made simple.
        </p>
      </div>
    </div>
  );
};

export default Footer;