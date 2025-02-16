import React, { useState } from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterLine } from "react-icons/ri";
const TopBar = () => {
  return (
    <div className="bg-kang-red text-white">
      <div className="container mx-auto flex  justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300 ">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300 ">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300 ">
            <RiTwitterLine className="h-5 w-4" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>Chúng tôi vận chuyển trên toàn thế giới - vận chuyển nhanh chóng và đáng tin cậy! </span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="tel:+01234567890" className="hover:text-gray-300">
            +(84) 332 65 3962
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
