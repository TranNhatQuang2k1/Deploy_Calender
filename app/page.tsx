"use client";
import Image from "next/image";
import HeaderSidebar from "./components/sidebar/HeaderSidebar";
import HeaderCalender from "./components/calender/headerCalender";
import Profile from "./components/sidebar/Profile";
import Projects from "./components/sidebar/Projects";
import Team from "./components/sidebar/Team";
import DetailCalender from "./components/calender/DetailCalender";
import SectionCalender from "./components/calender/SectionCalender";
import Addtask from "./components/calender/Addtask";
import { useCallback, useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = () => {
    setShowModal(true);
  };
  const handleCloseTask = () => {
    setShowModal(false);
  };
  return (
    <div className="">
      <div className="relative">
        <div className="container-wrap flex flex-row shadow-xl">
          <div className=" left-content bg-white flex flex-col flex-[2]">
            <HeaderSidebar />
            <Profile />
            <Projects />
            <Team />
          </div>

          <div className="right-content bg-white flex flex-col flex-[8] ov">
            <HeaderCalender />
            <div className="max-w-[925px] w-full flex flex-col flex-[10] mx-auto animation transition-all overflow-auto overflow-y-visible ">
              <SectionCalender handleAddTask={handleAddTask} />
              <DetailCalender />
            </div>
          </div>
        </div>
      </div>
      <Addtask isOpen={showModal} onClose={handleCloseTask} />
    </div>
  );
}
