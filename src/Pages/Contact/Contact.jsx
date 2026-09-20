
import { GrLocationPin } from "react-icons/gr";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] pt-28 px-50">
      <div className="mx-auto px-4 bg-[#3b3a62] p-6 md:p-8 rounded-xl px-20 text-white">
        
        <h3 className="text-white text-center font-bold text-2xl mb-8">
          Get in touch with{" "}
          <span className="text-red-500 font-bold">SR</span>moni
        </h3>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white my-5">
              Contact Info
            </h4>

            <p className="text-sm text-gray-400 mb-6">
              Have a question or need beauty advice? We're here to help you
              with your skincare and makeup journey.
            </p>

            {/* Address */}
            <div className="flex gap-3 items-center mb-2">
              <GrLocationPin className="text-red-300 text-xl" />

              <h5 className="font-semibold text-sm text-white">
                Address:
              </h5>

              <p className="text-gray-200 text-sm uppercase">
                Mohakhali TB Gate Dhaka
              </p>
            </div>

            {/* Email */}
            <div className="flex gap-3 items-center mb-2">
              <MdMarkEmailRead className="text-white text-xl" />

              <h5 className="font-semibold text-sm text-white">
                Email:
              </h5>

              <p className="text-gray-200 text-sm">
                rintymoni01@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="flex gap-3 items-center mb-2">
              <FaPhoneVolume className="text-red-400 text-xl" />

              <h5 className="font-semibold text-sm text-white">
                Phone:
              </h5>

              <p className="text-gray-200 text-sm">
                01834688332
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div >
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

