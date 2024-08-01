import React from "react";
import { HEADER_LOGO } from "../Utils/contants";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className="w-full bg-black shadow-xl shadow-gray-400 flex justify-between fixed">
      <div>
        <img
          className="w-14 py-4 mx-10 text-red-700 text-xs"
          alt="header-logo"
          src={HEADER_LOGO}
        />
      </div>
      <div className="mx-10 my-6">
        <AiOutlineMenu className="text-3xl text-red-700 " />
      </div>
    </div>
  );
};

export default Header;
