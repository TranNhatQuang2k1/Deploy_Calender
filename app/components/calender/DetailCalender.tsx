import React from "react";
const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const daysOfMonth = [
  {
    title: "Monday",
    desc: "",
  },
  {
    title: "Tuesday",
    desc: "",
  },
  {
    title: "Wednesday",
    desc: "",
  },
  {
    title: "Thursday",
    desc: "",
  },
  {
    title: "Friday",
    desc: "",
  },
  {
    title: "Saturday",
    desc: "",
  },
  {
    title: "Sunday",
    desc: "",
  },
  {
    title: "31",
    desc: "",
  },
  {
    title: "1",
    desc: "Write an article about design trends",
  },
  {
    title: "2",
    desc: "",
  },
  {
    title: "3",
    desc: "",
  },
  {
    title: "4",
    desc: "",
  },
  {
    title: "5",
    desc: "Write an article about design trends",
  },
  {
    title: "6",
    desc: "",
  },
  {
    title: "7",
    desc: "Write an article about",
  },
  {
    title: "8",
    desc: "",
  },
  {
    title: "9",
    desc: "",
  },
  {
    title: "10",
    desc: "",
  },
  {
    title: "11",
    desc: "",
  },
  {
    title: "12",
    desc: "",
  },
  {
    title: "13",
    desc: "",
  },
  {
    title: "14",
    desc: "",
  },
  {
    title: "15",
    desc: "",
  },
  {
    title: "16",
    desc: "Write an article about",
  },
  {
    title: "17",
    desc: "",
  },
  {
    title: "18",
    desc: "",
  },
  {
    title: "19",
    desc: "",
  },
  {
    title: "20",
    desc: "",
  },
  {
    title: "21",
    desc: "",
  },
  {
    title: "22",
    desc: "",
  },
  {
    title: "23",
    desc: "",
  },
  {
    title: "24",
    desc: "",
  },
  {
    title: "25",
    desc: "",
  },
  {
    title: "26",
    desc: "",
  },
  {
    title: "27",
    desc: "",
  },
  {
    title: "28",
    desc: "",
  },
  {
    title: "29",
    desc: "",
  },
];
const DetailCalender = () => {
  return (
    <div className="flex flex-[9] items-center calender-wrap mb-5 animation overflow-visible">
      <div className="calender">
        {daysOfMonth?.map((day, index) => {
          return (
            <div
              key={index}
              className={`${week?.includes(day.title) ? "day" : "days"} ${
                day?.desc && index % 7 === 0
                  ? "origin"
                  : day?.desc
                  ? "focus"
                  : ""
              } flex flex-col relative`}
            >
              <span className="">{day.title}</span>
              <span className={`${day?.desc ? "text" : ""}`}>{day.desc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailCalender;
