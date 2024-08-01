import React from "react";
import { FcLike } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-1 w-full font-serif py-2 mt-auto bg-black ">
      <div className="flex flex-wrap text-white">
        <h1>Created by</h1>
        <div>
          <FcLike className=" mt-1 ml-1" />
        </div>
      </div>
      <h1 className="text-red-700"> Harsh Bhoir</h1>

      <h1>2024</h1>
    </div>
  );
};

export default Footer;
