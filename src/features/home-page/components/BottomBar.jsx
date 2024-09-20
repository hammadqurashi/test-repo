import React, { useState } from "react";
import { homeBtmImg } from "../../../assets";
import Button from "../../../shared/components/Button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiPhone, FiRefreshCw } from "react-icons/fi";
import { PiHandPalm } from "react-icons/pi";

const QtyInput = () => {
  const [qty, setQty] = useState(0);

  const addQty = () => {
    setQty((prev) => prev + 1);
  };

  const subtractQty = () => {
    if (qty <= 0) return;
    setQty((prev) => prev - 1);
  };

  return (
    <div className="flex items-center justify-between ">
      <Button
        bg="#000000"
        color="#ffffff"
        className="px-3 py-2 text-base"
        handleClick={addQty}
      >
        <FaPlus />
      </Button>
      <span className="text-sm">{qty}</span>
      <Button
        bg="#000000"
        color="#ffffff"
        className="px-3 py-2 text-base"
        handleClick={subtractQty}
      >
        <FaMinus />
      </Button>
    </div>
  );
};

const QtyManipulator = ({ isReverse = false }) => {
  return (
    <div
      className={`${
        isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex flex-col items-center justify-start gap-6`}
    >
      <div className="flex flex-col gap-2 w-full lg:w-1/2">
        <Button bg="#000000" color="#ffffff" className="text-xs py-2">
          aa
        </Button>
        <QtyInput />
      </div>

      <div className="flex flex-col gap-2 items-center lg:items-start">
        <p className="font-bold text-lg">وسائل مساعدة</p>
        <div className="flex items-center gap-4 lg:gap-2">
          <Button bg="transparent" className="border px-2 py-2">
            <FiRefreshCw />
          </Button>
          <Button bg="transparent" className="border px-2 py-2">
            <FiPhone />
          </Button>
          <Button bg="transparent" className="border px-2 py-2">
            <PiHandPalm className="text-lg" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const BottomBar = () => {
  return (
    <div className="shadow-lg rounded-lg px-10 py-4">
      <div className="grid gap-7 lg:gap-0 lg:grid-cols-3 items-center">
        <QtyManipulator />
        <div className="flex justify-center">
          <img src={homeBtmImg} className="w-[250px]" />
        </div>
        <QtyManipulator isReverse />
      </div>
    </div>
  );
};

export default BottomBar;
