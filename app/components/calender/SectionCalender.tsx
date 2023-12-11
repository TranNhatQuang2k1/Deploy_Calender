import React from "react";
interface SectionCalenderProps {
  handleAddTask: () => void;
}
const SectionCalender: React.FC<SectionCalenderProps> = ({ handleAddTask }) => {
  return (
    <div className="flex flex-row flex-[1] items-center justify-between w-full m-auto px-[10px]">
      <div className="flex flex-row flex-1">
        <button className="btn-week px-3 py-1 text-white text-xs">Week</button>
        <button className="btn-month px-2 py-1 text-[#4d76fd] text-xs">
          Month
        </button>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 mr-2">
        <span className="font-serif text-[14px]">Octorber</span>
        <span className="text-[11px] text-[gray]">2020</span>
      </div>
      <div className="flex flex-1 items-center justify-center gap-4">
        <button className="btn-weekend  text-white px-2 py-1 rounded-3xl text-[13px]">
          Weekends
        </button>
        <button
          className="btn-Addtask  text-white px-2 py-1 rounded-3xl text-[13px] hover:animate-bounce"
          onClick={handleAddTask}
        >
          Add task
        </button>
      </div>
    </div>
  );
};

export default SectionCalender;
