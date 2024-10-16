import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left */}

        <div>
          <div className="flex items-center">
            <img
              onClick={() => {
                navigate("/");
                scrollTo(0, 0);
              }}
              src={assets.logo}
              alt=""
              className="w-50 cursor-pointer rounded-full"
              style={{ height: "80px", width: "80px" }}
            />
            <span
              onClick={() => {
                navigate("/");
                scrollTo(0, 0);
              }}
              className="text-blue-500 text-3xl font-bold italic underline cursor-pointer"
              style={{ fontFamily: '"Comic Sans MS", cursive' }}>
              Your Doc
            </span>
          </div>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            unde nesciunt, voluptate consectetur ratione numquam illo sequi,
            laudantium cumque nulla delectus qui corrupti quod, repellendus
            temporibus minus obcaecati ea odio?
          </p>
        </div>
        {/* center */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+9112*****789</li>
            <li>xyz@gmail.com</li>
          </ul>
        </div>
        {/* end */}
      </div>
      <div>
        {/* copyright text */}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ Bhangu.dev - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
