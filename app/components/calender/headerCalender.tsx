import Image from "next/image";
import React from "react";

const HeaderCalender = () => {
  return (
    <div className="header-calender flex flex-[1]">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row flex-[1] search pl-3 items-center">
          <div className=" w-[30px] h-[30px] rounded-full items-center justify-center flex">
            <Image
              src={"/search.svg"}
              alt="avartar"
              width={16}
              height={16}
              className="object-cover rounded-full"
            />
          </div>
          <input className="outline-none text-sm" placeholder="Search..." />
        </div>
        <div className="flex flex-row flex-[1]  justify-center title font-semibold">
          Calender
        </div>
        <div className="flex flex-row flex-[1] icon justify-end pr-6">
          <div className=" w-[30px] h-[30px] rounded-full items-center justify-center flex">
            <Image
              src={"/menu.jfif"}
              alt="avartar"
              width={30}
              height={30}
              className="object-cover rounded-full bg-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCalender;
