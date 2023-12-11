import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="flex flex-[2]">
      <div className="flex flex-col mx-auto  w-[80%] my-auto h-[90%] items-start">
        <p className="font-semibold">Team</p>
        <div className="w-full gap-3 flex">
          <div className="  w-[46px] h-[46px] rounded-full items-center justify-center flex">
            <Image
              src={"/nhi1.jpg"}
              alt="avartar"
              width={36}
              height={36}
              style={{ width: 36 + "px", height: 36 + "px" }}
              className="object-cover rounded-full "
            />
          </div>

          <div className="  w-[36px] h-[36px] rounded-full items-center justify-center flex">
            <Image
              src={"/nhi2.jpg"}
              alt="avartar"
              width={36}
              height={36}
              style={{ width: 36 + "px", height: 36 + "px" }}
              className="object-cover rounded-full "
            />
          </div>

          <div className="  w-[36px] h-[36px] rounded-full items-center justify-center flex ">
            <Image
              src={"/nhi3.jpg"}
              alt="avartar"
              width={36}
              height={36}
              style={{ width: 36 + "px", height: 36 + "px" }}
              className="object-cover rounded-full hover:scale-50 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
