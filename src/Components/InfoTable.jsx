import React from "react";

function InfoTable({ data }) {
  return (
    <div className="bg-white shadow-lg w-[25%] ">
      {data.map((elem, i) => {
        return (
          <div
            key={i}
            className="flex items-center justify-start bg-white  p-4 rounded w-80 py-7 gap-4 mt-3"
          >
            <img className="w-14 " src={elem.src} alt="" />
            <div>
              <h2 className="font-bold text-2xl">{elem.heading}</h2>
              <p className="text-lg text-gray-500">{elem.subHeading}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default InfoTable;
