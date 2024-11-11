import React from "react";
import { SlCalender } from "react-icons/sl";

function ScheduleBtn() {
  return (
    <button className="bg-black relative rounded-3xl text-white pl-3 py-2 w-48">
      <div className="absolute bg-red-400 w-1/5 h-full text-center rounded-full top-0 left-0 p-2">
        <SlCalender className=" text-xl font-bold" />
      </div>
      Schedule a visit
    </button>
  );
}

export default ScheduleBtn;
