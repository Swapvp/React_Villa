import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ data }) {
  return (
    <>
      {data.map((item, i) => {
        return (
          <Link to={`/Details/${item.id}`} key={i}>
            <div className="bg-blue-gray-50 w-96 h-auto p-4 rounded-lg">
              <div>
                <img src={item.src} alt="" className="rounded-xl" />
              </div>
              <div className="flex justify-between items-center my-4">
                <p className="px-4 py-2 text-sm bg-red-100 rounded-lg">
                  {item.type}
                </p>
                <p className="text-orange-800 font-bold text-2xl">
                  ${item.price}
                </p>
              </div>
              <div>
                <h2 className="font-bold text-xl my-3">{item.headiing}</h2>
              </div>
              <div className="flex flex-wrap gap-3 border-b-2 my-5 pb-5 border-solid border-gray-50 ">
                <p>
                  Bedrooms: <span className="font-bold">{item.bedroom}</span>
                </p>
                <p>
                  Bathrooms: <span className="font-bold">{item.bathrooms}</span>
                </p>
                <p>
                  Area: <span className="font-bold">{item.area}</span>
                </p>
                <p>
                  Floor: <span className="font-bold">{item.floor}</span>
                </p>
                <p>
                  Parking: <span className="font-bold">{item.parking}</span>
                </p>
              </div>
              <div className="text-center my-3">
                <button className="bg-black text-white hover:bg-orange-700 rounded-full py-2 px-4">
                  Schedule a visit
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default PropertyCard;
