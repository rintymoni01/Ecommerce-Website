import { GrLocationPin } from "react-icons/gr";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] pt-20 sm:pt-24 md:pt-28 lg:pt-28 px-4 sm:px-6 md:px-10 lg:px-50">
      <div className="mx-auto bg-[#3b3a62] p-5 sm:p-6 md:p-8 lg:p-8 rounded-xl px-5 sm:px-8 md:px-12 lg:px-20 text-white">

        {/* Title */}
        <h3 className="text-white text-center font-bold text-xl sm:text-2xl mb-6 sm:mb-8">
          Get in touch with{" "}
          <span className="text-red-500 font-bold">SR</span>moni
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-white my-4 sm:my-5">
              Contact Info
            </h4>

            <p className="text-sm sm:text-base text-gray-400 mb-6 leading-6">
              Have a question or need beauty advice? We're here to help you
              with your skincare and makeup journey.
            </p>

            {/* Address */}
            <div className="flex gap-3 items-start mb-4">
              <GrLocationPin className="text-red-300 text-xl min-w-5 mt-0.5" />

              <h5 className="font-semibold text-sm text-white whitespace-nowrap">
                Address:
              </h5>

              <p className="text-gray-200 text-sm uppercase break-words">
                Mohakhali TB Gate Dhaka
              </p>
            </div>

            {/* Email */}
            <div className="flex gap-3 items-start mb-4">
              <MdMarkEmailRead className="text-white text-xl min-w-5 mt-0.5" />

              <h5 className="font-semibold text-sm text-white whitespace-nowrap">
                Email:
              </h5>

              <p className="text-gray-200 text-sm break-all">
                rintymoni01@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="flex gap-3 items-center mb-2">
              <FaPhoneVolume className="text-red-400 text-xl min-w-5" />

              <h5 className="font-semibold text-sm text-white whitespace-nowrap">
                Phone:
              </h5>

              <p className="text-gray-200 text-sm">
                01834688332
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form>

              {/* Name */}
              <div className="mb-5 flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-2 text-sm font-medium text-gray-200"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-lg outline-none bg-white text-gray-800"
                />
              </div>

              {/* Email */}
              <div className="mb-5 flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-medium text-gray-200"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg outline-none bg-white text-gray-800"
                />
              </div>

              {/* Message */}
              <div className="mb-5 flex flex-col">
                <label
                  htmlFor="message"
                  className="mb-2 text-sm font-medium text-gray-200"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Type your message..."
                  required
                  className="w-full px-4 py-3 rounded-lg outline-none bg-white/15 text-white resize-y placeholder:text-gray-300"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#ff2a4b] to-[#a832e8] text-white font-bold text-base hover:opacity-90 transition"
              >
                Send Message 🚀
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;