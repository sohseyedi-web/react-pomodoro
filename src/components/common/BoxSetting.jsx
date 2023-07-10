import React from "react";
import { toast } from "react-hot-toast";

const BoxSetting = ({ title, value, setValue }) => {
  const increment = () => {
    setValue((prevState) => prevState + 1);
  };
  const increase = () => {
    if (value !== 0) {
      setValue((prevState) => prevState - 1);
    } else {
      toast.success("دیگه نمیشه!");
    }
  };

  return (
    <div
      className={`h-[100px]
        bg-[#2c2e3e] text-white w-[90%] flex flex-col mx-auto my-2 rounded-2xl shadow-md py-3 mt-5 transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-4 w-full cursor-pointer">
        <h3>{title}</h3>
        <div className="gap-x-1 flex items-center">
          <span>{value} دقیقه</span>
        </div>
      </div>
      <div className={"w-[40%] mx-auto flex items-center justify-between pt-5"}>
        <button
          onClick={increase}
          className="w-[35px] h-[35px] rounded-full shadow-md border-none bg-[#9190d9] flex items-center justify-center text-3xl"
        >
          -
        </button>
        <span className="font-semibold text-xl">{value}</span>
        <button
          onClick={increment}
          className="w-[35px] h-[35px] rounded-full shadow-md border-none bg-[#9190d9] flex items-center justify-center text-3xl"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BoxSetting;
