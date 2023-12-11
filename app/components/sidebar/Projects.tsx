import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-[3] line">
      <div className="flex flex-col mx-auto  w-[80%] my-auto h-[90%] items-start">
        <div className="font-semibold">Projects</div>
        <ul className="relative">
          <li className="list-style before: border-purple-600">Marketing</li>
          <li className="list-style  border-teal-500">Design</li>
          <li className="list-style before:border-3 border-solid border-teal-500">
            Development
          </li>
          <li className="list-style">Finance</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
