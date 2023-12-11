import Image from "next/image";
import React from "react";
const icons = [
  {
    src: "/settings.svg",
    count: 0,
  },
  {
    src: "/email1.png",
    count: 2,
  },
  {
    src: "/notify.png",
    count: 6,
  },
];
const Profile = () => {
  return (
    <div className="relative w-full flex flex-[5] line">
      <div className="flex flex-col mx-auto  w-[80%] my-auto h-[90%] items-center">
        <div className="w-[76px] h-[76px] rounded-full flex  custom-animation">
          <Image
            src={"/nhi.jpg"}
            alt="avartar"
            width={76}
            height={76}
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h5 className="font-semibold my-1 p-1">Tran Nhat Quang</h5>
          <p className="text-xs text-#a1a4b9 pb-4">quangtn2@vnext.vn</p>
        </div>

        <div className="flex flex-row  w-[90%]  justify-between items-center">
          {icons?.map((icon, index) => {
            return (
              <button
                key={index}
                className="w-[36px] h-[36px] flex justify-center items-center bg-slate-100 rounded-full relative"
              >
                <Image
                  src={icon.src}
                  alt="avartar"
                  width={18}
                  height={18}
                  className={`object-contain rounded-full ${
                    index === 2 ? "animate-shake" : ""
                  }`}
                />
                {icon.count != 0 && (
                  <p className="w-[12px] h-[12px] rounded-full text-white text-size absolute text-sm bg-red-600 top-0 right-0 items-center justify-center flex">
                    {icon?.count}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        <div className="w-full h-2 bg-slate-200 mt-7 mb-4 rounded-md relative">
          <p className="absolute top-[-16px] right-0 text-size">12/34</p>
          <div className="w-[60%] h-2 bg-teal-500 rounded-md absolute"></div>
        </div>

        <div className="flex flex-row w-full justify-between items-center gap-2">
          <div className="flex flex-col justify-center items-center">
            <span className="font-semibold">12</span>
            <p className="text-size  text-center">Completted task</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="items-center font-semibold">22</span>
            <p className="text-size flex text-center">Todo task</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="items-center font-semibold">69</span>
            <p className="text-size text-center flex">All completted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
