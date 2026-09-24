import { Clock, Lock, RotateCcw, Truck } from "lucide-react";

const fetures = [
  {
    icon: Truck,
    text: "Free Shipping",
    subText: "On orders over $100",
  },
  {
    icon: Lock,
    text: "Secure Payment",
    subText: "100% Protected payments",
  },
  {
    icon: RotateCcw,
    text: "Easy Returns",
    subText: "30-day Return Policy",
  },
  {
    icon: Clock,
    text: "24/7 Support",
    subText: "Dedicated Customer Service",
  },
];

const Fetures = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {fetures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  flex items-center justify-center
                  text-center
                  sm:text-left
                  gap-4
                  lg:justify-center
                "
              >
                {/* Icon */}
                <Icon
                  className="shrink-0 h-9 w-9 sm:h-10 sm:w-10 text-gray-600"
                  aria-hidden="true"
                />

                {/* Text */}
                <div>
                  <p className="text-sm sm:text-base font-medium text-gray-900">
                    {feature.text}
                  </p>

                  <p className="mt-1 text-xs sm:text-sm text-gray-500">
                    {feature.subText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fetures;