import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-600">
        <p>
          Contact <span className="text-gray-800 font-semibold">Us</span>{" "}
        </p>
      </div>
      {/* image div */}
      <div className="my-20 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px] border rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
          src={assets.contact_image}
          alt=""
        />
        {/* right side div */}
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className=" text-gray-500">
            00000 XYZA <br />
            Suite 000, MUMBAI, INDIA
          </p>
          <p className=" text-gray-500">
            TEL:81*******91 <br /> Email: xyz@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            CAREERS AT YOUR DOCS
          </p>
          <p className=" text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-400">
            EXPLORE JOBS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
