import React from "react";
import BtnLink from "../../../shared/components/BtnLink";

import { FaRegArrowAltCircleLeft, FaBan } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { FiRefreshCw } from "react-icons/fi";
import { logo } from "../../../assets";

const TopBar = () => {
  return (
    <div className="bg-[#6DCEF2] px-7 py-2 rounded-[46px]">
      <div className="grid gap-3 lg:gap-0 lg:grid-cols-3 items-center">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
          <BtnLink rounded="18px">
            <FaRegArrowAltCircleLeft className="text-sm" />
            <p className="text-xs font-bold">لوحة القيادة </p>
          </BtnLink>
          <BtnLink rounded="18px">
            <FaBan className="text-sm" />
            <p className="text-xs font-bold">انهاء اللعبة</p>
          </BtnLink>
          <BtnLink bg="#000000" color="#ffffff" rounded="18px">
            <HiOutlineLogout />
            <p className="text-xs font-bold">خروج</p>
          </BtnLink>
        </div>
        <div className="text-center">
          <p>aaaa</p>
        </div>
        <div className="flex items-center justify-between lg:justify-end gap-3">
          <BtnLink bg="#000000" color="#ffffff" rounded="18px">
            <FiRefreshCw />
            <p className="text-xs font-bold">dd: دور الفريق</p>
          </BtnLink>
          <img src={logo} width={50} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
