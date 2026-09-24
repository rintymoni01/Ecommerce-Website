import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto my-6 sm:my-8 md:my-10 lg:my-12 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      <div className="rounded-2xl px-5 sm:px-6 md:px-8 lg:px-10 bg-white shadow-2xl">
        
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 py-6 sm:py-8">
          About <span className="text-red-800 font-bold">SR</span>moni
        </h3>

        {/* Intro */}
        <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
          Welcome to{" "}
          <span className="text-red-800 font-bold">SR</span>moni, your ultimate
          destination for authentic and premium cosmetics. From skin-loving
          skincare essentials to trendy makeup must-haves, we’re here to
          elevate your beauty routine with genuine products and exceptional
          service.
        </p>

        {/* Our Mission */}
        <h3 className="text-lg sm:text-xl font-semibold text-red-800 py-5 sm:py-6">
          Our Mission
        </h3>

        <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
          At <span className="text-red-800 font-bold">SR</span>moni, our mission
          is to make authentic and high-quality beauty products accessible to
          everyone. We are passionate about helping you look and feel your best,
          boosting your confidence with safe, skin-friendly products — all at
          competitive prices and delivered with speed and care.
        </p>

        {/* Why Choose */}
        <h3 className="text-lg sm:text-xl font-semibold text-red-800 py-5 sm:py-6">
          Why Choose
        </h3>

        <div className="space-y-3">
          <div className="flex gap-3 items-start">
            <div className="h-2 w-2 min-w-2 rounded-full bg-gray-700 mt-2"></div>

            <p className="text-sm sm:text-base text-gray-600 leading-6">
              100% authentic and premium cosmetic products from trusted global
              and local brands
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <div className="h-2 w-2 min-w-2 rounded-full bg-gray-700 mt-2"></div>

            <p className="text-sm sm:text-base text-gray-600 leading-6">
              Lightning-fast and secure shipping
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <div className="h-2 w-2 min-w-2 rounded-full bg-gray-700 mt-2"></div>

            <p className="text-sm sm:text-base text-gray-600 leading-6">
              Reliable customer support, always ready to help you choose the
              right product
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <div className="h-2 w-2 min-w-2 rounded-full bg-gray-700 mt-2"></div>

            <p className="text-sm sm:text-base text-gray-600 leading-6">
              Easy returns and a hassle-free shopping experience
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <h3 className="text-lg sm:text-xl font-semibold text-red-800 py-5 sm:py-6">
          Our Vision
        </h3>

        <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
          We envision a future where self-care and beauty elevate everyday life.
          At <span className="text-red-800 font-bold">SR</span>moni, we’re
          committed to staying ahead of the curve, offering the best beauty
          solutions that are both effective and affordable.
        </p>

        {/* Join Family */}
        <div className="items-center pb-8 sm:pb-10 justify-center flex flex-col">
          <h4 className="text-base sm:text-lg font-semibold text-red-800 pt-6 text-center">
            Join the SRmoni Family
          </h4>

          <p className="text-sm sm:text-base text-gray-600 py-5 sm:py-6 text-center leading-6 sm:leading-7">
            Whether you're a makeup lover, a skincare enthusiast, or just
            looking for something fresh and glowing —{" "}
            <span className="text-red-800 font-bold">SR</span>moni has something
            special for everyone.
          </p>

          <Link to="/products">
            <button className="px-5 py-2 bg-red-500 hover:bg-red-600 rounded-md text-white transition">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;