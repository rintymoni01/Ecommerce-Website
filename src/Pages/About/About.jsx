import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="items-center px-40   container mx-auto my-12">
      <div className=" rounded-2xl px-10 bg-white shadow-2xl">
        <h3 className="text-2xl font-bold text-center text-gray-900 py-8">
          About  <span className="text-red-800 font-bold ">SR</span>moni
        </h3>
        <p className="text-sm text-gray-600">
          Welcome to <span className="text-red-800 font-bold">SR</span>moni,
          your ultimate destination for authentic and premium cosmetics. From
          skin-loving skincare essentials to trendy makeup must-haves, we’re
          here to elevate your beauty routine with genuine products and
          exceptional service.
        </p>
        <h3 className="text-xl font-semibold text-red-800 py-6">Our Mission</h3>
        <p className="text-sm text-gray-600">
          At <span className="text-red-800 font-bold">SR</span>moni, our mission
          is to make authentic and high-quality beauty products accessible to
          everyone. We are passionate about helping you look and feel your best,
          boosting your confidence with safe, skin-friendly products — all at
          competitive prices and delivered with speed and care.
        </p>
        <h3 className="text-xl font-semibold text-red-800 py-6">Why Choose</h3>
        <div>
          <div className=" flex gap-2 items-center">
            <div className="h-2 w-2 rounded-full bg-gray-700"> </div>
            <p className="text-sm text-gray-600 pb-2">
              100% authentic and premium cosmetic products from trusted global
              and local brands
            </p>
          </div>
          <div className=" flex gap-2 items-center">
            <div className="h-2 w-2 rounded-full bg-gray-700"></div>
            <p className="text-sm text-gray-600">
              Lightning-fast and secure shipping
            </p>
          </div>
          <div className=" flex gap-2 py-2 items-center">
            <div className="h-2 w-2 rounded-full bg-gray-700"></div>
            <p className="text-sm text-gray-600">
              Reliable customer support, always ready to help you choose the
              right product
            </p>
          </div>
          <div className=" flex gap-2 items-center">
            <div className="h-2 w-2 rounded-full bg-gray-700"></div>
            <p className="text-sm text-gray-600">
              Easy returns and a hassle-free shopping experience
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-red-800 py-6">Our Vision</h3>
        <p className="text-sm text-gray-600">
          We envision a future where self-care and beauty elevate everyday life.
          At <span className="text-red-800 font-bold">SR</span>moni, we’re
          committed to staying ahead of the curve, offering the best beauty
          solutions that are both effective and affordable.
        </p>

        <div className="items-center pb-10 justify-center  flex flex-col">
          <h4 className="text-md font-semibold text-red-800 pt-6">
           
            Join the SRmoni Family
          </h4>
          <p className="text-sm text-gray-600 py-6">
            Whether you're a makeup lover, a skincare enthusiast, or just
            looking for something fresh and glowing —{" "}
            <span className="text-red-800 font-bold">SR</span>moni has something
            special for everyone.
          </p>

          
          <Link to={"/products"}>
          <button className="px-4 py-1 bg-red-500 rounded-md text-white">
            Shop Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
