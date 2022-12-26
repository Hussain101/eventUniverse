import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white px-8 py-4">
      <div className="flex">
        <p className="">Connect with us</p>
        <i className="fa-brands fa-facebook mx-2 text-xl text-[#560BAD]"></i>
        <i className="fa-brands fa-instagram mx-2 text-xl text-[#560BAD]"></i>
        <i className="fa-brands fa-linkedin mx-2 text-xl text-[#560BAD]"></i>
      </div>
      <div>
        <p>
          All rights reserved{" "}
          <span className="text-purple-600"> @Event Universe</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
