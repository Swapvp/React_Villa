import React, { useState } from "react";
import ScheduleBtn from "./ScheduleBtn";

const tabData = [
  {
    id: 1,
    title: "Apartments",
    image: "./src/assets/images/deal-01.jpg",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
    ],
    info: [
      { label: "Total Flat Space", value: "320 m2" },
      { label: "Living Room", value: "120 m2" },
      { label: "Bedroom", value: "80 m2" },
      { label: "Bathroom", value: "60 m2" },
    ],
  },
  {
    id: 2,
    title: "Villa House",
    image: "./src/assets/images/deal-02.jpg",
    description: [
      "Luxurious villa with a private pool and garden area.",
      "Ideal for families looking for a peaceful environment.",
    ],
    info: [
      { label: "Total Villa Space", value: "500 m2" },
      { label: "Garden", value: "200 m2" },
      { label: "Pool Area", value: "100 m2" },
    ],
  },
  {
    id: 3,
    title: "Penthouse",
    image: "./src/assets/images/deal-03.jpg",
    description: [
      "Exclusive penthouse with panoramic city views.",
      "Equipped with modern amenities and a private terrace.",
    ],
    info: [
      { label: "Total Penthouse Space", value: "450 m2" },
      { label: "Terrace", value: "150 m2" },
      { label: "Living Area", value: "200 m2" },
    ],
  },
];

function BestDeal() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-orange-800 border-l-4 border-red-800 font-bold text-xl px-4">
              Contact Us
            </p>
            <h1 className="text-5xl font-extrabold my-4 leading-tight">
              Get In Touch With Our Agents
            </h1>
          </div>
          <div className="flex space-x-4">
            {tabData.map((tab) => (
              <div
                key={tab.id}
                className={`cursor-pointer p-2 ${
                  activeTab === tab.id
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </div>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {tabData
            .filter((tab) => tab.id === activeTab)
            .map((tab) => (
              <div
                key={tab.id}
                className="flex gap-10 justify-center items-center"
              >
                <div className="shadow-lg p-4 w-1/5">
                  {tab.info.map((item, index) => (
                    <div key={index} className="flex justify-between my-5">
                      <p>{item.label}</p>
                      <h2>{item.value}</h2>
                    </div>
                  ))}
                </div>
                <div className="w-2/6">
                  <img src={tab.image} alt={tab.title} />
                </div>
                <div className="w-2/6">
                  <h3 className="text-lg font-bold">
                    Extra Info About Property
                  </h3>
                  {tab.description.map((text, index) => (
                    <p key={index} className="my-4">
                      {text}
                    </p>
                  ))}
                  <ScheduleBtn />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default BestDeal;
