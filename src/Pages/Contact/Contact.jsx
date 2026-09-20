
import { GrLocationPin } from "react-icons/gr";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
            <div>
<h3 className=" text-white font-bold text-2xl">Get in tuch your <span className="text-red-500 font-bold">SR</span>moni</h3>


<div>
    <h4 className="text-xl font-semibold text-white">Contact Info</h4>
    <p className="text-sm text-gray-400">Have a question or need beauty advice? We're here to help you with your skincare and makeup journey.</p>

    <div className="flex gap-2 items-center text-center ">
        <GrLocationPin FaPhoneVolume  className="text-red-300"/>
        <h5 className="font-semibold text-sm text-white">Address:</h5>
        <p className="text-gray-400 text-sm uppercase">mohakhali tb gate dhaka</p>
    </div>
    <div className="flex gap-2 items-center text-center ">
        <MdMarkEmailRead  className="text-white"/>
        <h5 className="font-semibold text-sm text-white">Email:</h5>
        <p className="text-gray-400 text-sm">rintymoni01@gmail.com</p>
    </div>

    <div className="flex gap-2 items-center text-center ">
        <FaPhoneVolume  className="text-red-00"/>
        <h5 className="font-semibold text-sm text-white">Phone:</h5>
        
         <p className="text-gray-400 text-sm">01834688332</p>
    </div>
</div>
<div style="background-color: #3b3a62; padding: 30px; border-radius: 12px; max-width: 450px; color: #ffffff; font-family: Arial, sans-serif;">
  <form>
  {/* -- Your Name Field -- */}
    <div style="margin-bottom: 20px; display: flex; flex-direction: column;">
      <label for="name" style="margin-bottom: 8px; font-size: 14px; font-weight: 500; color: #e0e0e0;">Your Name</label>
      <input type="text" id="name" placeholder="John Doe" required style="width: 100%; padding: 12px 16px; border-radius: 8px; border: 1px solid transparent; outline: none; font-size: 14px; background-color: #ffffff; color: #333333; box-sizing: border-box;" />
    </div>

  {/* -- Email Address Field -- */}
    <div style="margin-bottom: 20px; display: flex; flex-direction: column;">
      <label for="email" style="margin-bottom: 8px; font-size: 14px; font-weight: 500; color: #e0e0e0;">Email Address</label>
      <input type="email" id="email" placeholder="john@example.com" required style="width: 100%; padding: 12px 16px; border-radius: 8px; border: 1px solid transparent; outline: none; font-size: 14px; background-color: #ffffff; color: #333333; box-sizing: border-box;" />
    </div>

     {/* Your Message Field -- */}
    <div style="margin-bottom: 20px; display: flex; flex-direction: column;">
      <label for="message" style="margin-bottom: 8px; font-size: 14px; font-weight: 500; color: #e0e0e0;">Your Message</label>
      <textarea id="message" rows="5" placeholder="Type your message..." required style="width: 100%; padding: 12px 16px; border-radius: 8px; border: 1px solid transparent; outline: none; font-size: 14px; background-color: rgba(255, 255, 255, 0.15); color: #ffffff; resize: vertical; box-sizing: border-box;"></textarea>
    </div>

    {/* -- Submit Button -- */}
    <button type="submit" style="width: 100%; padding: 14px; border: none; border-radius: 8px; background: linear-gradient(90deg, #ff2a4b, #a832e8); color: #ffffff; font-size: 16px; font-weight: bold; cursor: pointer;">Send Message 🚀</button>
  </form>
</div>

            </div>

         
        </div>
    );
};

export default Contact;