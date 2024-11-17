import React, { useState } from "react";
import PropertyCard from "../Components/PropertyCard";
import PageHeader from "../Components/PageHeader";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const propertyData = [
  {
    src: "src/assets/images/property-01.jpg",
    type: "Apartment",
    price: 500000,
    headiing: "Modern Apartment",
    bedroom: 3,
    bathrooms: 2,
    area: "1200 sqft",
    floor: 5,
    parking: "Yes",
  },
  {
    src: "src/assets/images/property-02.jpg",
    type: "Villa",
    price: 1500000,
    headiing: "Luxury Villa",
    bedroom: 5,
    bathrooms: 4,
    area: "3000 sqft",
    floor: 2,
    parking: "Yes",
  },
  {
    src: "src/assets/images/property-03.jpg",
    type: "Penthouse",
    price: 2500000,
    headiing: "Penthouse Suite",
    bedroom: 4,
    bathrooms: 3,
    area: "2000 sqft",
    floor: 10,
    parking: "Yes",
  },

  {
    src: "src/assets/images/property-04.jpg",
    type: "Penthouse",
    price: 2500000,
    headiing: "Penthouse Suite",
    bedroom: 4,
    bathrooms: 3,
    area: "2000 sqft",
    floor: 10,
    parking: "Yes",
  },
  {
    src: "src/assets/images/property-05.jpg",
    type: "Penthouse",
    price: 2500000,
    headiing: "Penthouse Suite",
    bedroom: 4,
    bathrooms: 3,
    area: "2000 sqft",
    floor: 10,
    parking: "Yes",
  },
  {
    src: "src/assets/images/property-06.jpg",
    type: "Penthouse",
    price: 2500000,
    headiing: "Penthouse Suite",
    bedroom: 4,
    bathrooms: 3,
    area: "2000 sqft",
    floor: 10,
    parking: "Yes",
  },
  // Add more data as needed
];

function FilterTabs() {
  const [activeTab, setActiveTab] = useState("Show All");

  const filteredData =
    activeTab === "Show All"
      ? propertyData
      : propertyData.filter((item) => item.type === activeTab);

  return (
    <>
      <Nav />
      <PageHeader breadcrumbText="Properties" heading="Properties" />

      <div className="container mx-auto py-12">
        {/* Tabs */}
        <div className="flex justify-center mb-5">
          {["Show All", "Apartment", "Villa", "Penthouse"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 mx-2 text-sm font-bold rounded-lg ${
                activeTab === tab
                  ? "bg-orange-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PropertyCard data={filteredData} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FilterTabs;
