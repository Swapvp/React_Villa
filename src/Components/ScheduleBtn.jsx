import React from "react";
import { SlCalender } from "react-icons/sl";

function ScheduleBtn() {
  return (
    <button className="bg-black relative rounded-3xl text-white pl-10 py-3 w-52">
      <div className="absolute bg-red-400 w-[25%] h-full text-center rounded-full top-0 left-0">
        <SlCalender className=" text-xl font-bold" />
      </div>
      Schedule a visit
    </button>
  );
}

export default ScheduleBtn;
