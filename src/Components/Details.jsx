import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams(); 

  const cardHome = [
    {
      id: 1,
      src: "src/assets/images/property-01.jpg",
      type: "Luxury Villa",
      price: "2,264.000",
      headiing: "18 New Street Miami, OR 97219",
      bedroom: "8",
      bathrooms: "8",
      area: "45m2",
      floor: "3",
      parking: "6 Spots",
    },
    {
      id: 2,
      src: "src/assets/images/property-02.jpg",
      type: "Luxury Villa",
      price: "1.180.000",
      headiing: "54 Mid Street Florida, OR 27001",
      bedroom: "6",
      bathrooms: "5",
      area: "45m2",
      floor: "3",
      parking: "8 Spots",
    },
    {
      id: 3,
      src: "src/assets/images/property-03.jpg",
      type: "Luxury Villa",
      price: "1.460.000",
      headiing: "26 Old Street Miami, OR 38540",
      bedroom: "5",
      bathrooms: "4",
      area: "225m2",
      floor: "3",
      parking: "10 Spots",
    },
    {
      id: 4,
      src: "src/assets/images/property-04.jpg",
      type: "Apartment",
      price: "584.500",
      headiing: "12 New Street Miami, OR 12650",
      bedroom: "4",
      bathrooms: "3",
      area: "125m2",
      floor: "25th",
      parking: "2 cars",
    },
    {
      id: 5,
      src: "src/assets/images/property-05.jpg",
      type: "Penthouse",
      price: "925.600",
      headiing: "34 Beach Street Miami, OR 42680",
      bedroom: "4",
      bathrooms: "4",
      area: "180m2",
      floor: "38th",
      parking: "2 cars",
    },
    {
      id: 6,
      src: "src/assets/images/property-06.jpg",
      type: "Modern Condo",
      price: "450.000",
      headiing: "22 New Street Portland, OR 16540",
      bedroom: "3",
      bathrooms: "2",
      area: "165m2",
      floor: "26th",
      parking: "3 cars",
    },
  ];

  // Match the `id` from params to the `id` in cardHome
  const selectedCard = cardHome.find((card) => card.id === parseInt(id));

  if (!selectedCard) {
    return <div>No matching property found.</div>; // Handle case when no match is found
  }

  return (
    <div>
      <h1>{selectedCard.type}</h1>
      <img
        src={selectedCard.src}
        alt={selectedCard.type}
        style={{ width: "100%", maxWidth: "400px" }}
      />
      <p>
        <strong>Price:</strong> ${selectedCard.price}
      </p>
      <p>
        <strong>Location:</strong> {selectedCard.headiing}
      </p>
      <p>
        <strong>Bedrooms:</strong> {selectedCard.bedroom}
      </p>
      <p>
        <strong>Bathrooms:</strong> {selectedCard.bathrooms}
      </p>
      <p>
        <strong>Area:</strong> {selectedCard.area}
      </p>
      <p>
        <strong>Floor:</strong> {selectedCard.floor}
      </p>
      <p>
        <strong>Parking:</strong> {selectedCard.parking}
      </p>
    </div>
  );
};

export default Details;
