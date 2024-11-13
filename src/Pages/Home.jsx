import React from "react";
import Nav from "../Components/Nav";
import Contactinfo from "../Components/Contactinfo";
import Footer from "../Components/Footer";
import { Carousel } from "@material-tailwind/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Forms from "../Components/Forms";
import bgImage from "../assets/images/contact-bg.jpg";
import videoImage from "../assets/images/video-frame.jpg";
import { FaPlayCircle } from "react-icons/fa";
import InfoTable from "../Components/InfoTable";
import PropertyCard from "../Components/PropertyCard";
import BestDeal from "../Components/BestDeal";

const Home = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const featureData = [
    {
      src: "src/assets/images/info-icon-01.png",
      heading: "250 m2",
      subHeading: "Total Flat Space",
    },
    {
      src: "src/assets/images/info-icon-02.png",
      heading: "Contract",
      subHeading: "Contract Ready",
    },
    {
      src: "src/assets/images/info-icon-03.png",
      heading: "Payment",
      subHeading: "Payment Process",
    },
    {
      src: "src/assets/images/info-icon-04.png",
      heading: "Safety",
      subHeading: "24/7 Under Control",
    },
  ];

  const videoData = [
    {
      num: 34,
      heading: "Buildings Finished Now",
      count: 1,
    },
    {
      num: 12,
      heading: "Years Experience",
      count: 2,
    },
    {
      num: 24,
      heading: "Awwards Won 2023",
      count: 3,
    },
  ];

  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4348392449994!2d-122.4210912846821!3d37.77926097975606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818fd26b4f3d%3A0x7a7b8748493e9dd2!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus";

  const cardHome = [
    {
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
  return (
    <>
      <Nav />

      {/* Hero */}
      <Carousel>
        <img
          src="src\assets\images\banner-01.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="src\assets\images\banner-02.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="src\assets\images\banner-03.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
      {/* Hero */}

      {/* Section 2 */}
      <section className="container  mx-auto py-12 ">
        <div className="flex gap-8 w-full justify-around">
          <div className="w-[25%]">
            <img
              className="w-full h-full object-cover"
              src="src\assets\images\featured.jpg"
              alt=""
            />
          </div>
          <div className="w-2/5">
            <p className=" text-orange-800 border-l-4 border-red-800 font-bold text-xl px-4">
              Featured
            </p>
            <h1 className="text-5xl font-extrabold w-4/5 my-4 leading-tight">
              Best Appartment & Sea view
            </h1>
            <div className="">
              <Accordion className="" open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  What is Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  How to use Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
            </div>
          </div>
          <InfoTable data={featureData} />
        </div>
      </section>
      {/* Section 2 */}

      {/* Video sec */}
      <section
        style={{ backgroundImage: `url(${bgImage})` }}
        className="h-96 text-center flex flex-col  items-center py-12"
      >
        <p className=" text-orange-800 border-l-4 border-red-800 font-bold text-xl px-4">
          Video View
        </p>
        <h1 className="text-3xl text-white font-extrabold my-4 leading-tight w-1/2">
          Get Closer View & Different Feeling
        </h1>
      </section>
      <section className="-mt-36">
        <div className="container mx-auto flex justify-center relative">
          <img src={videoImage} alt="" className="rounded-2xl " />
          <FaPlayCircle className="absolute top-2/4 text-5xl text-white outline outline-[15px] outline-orange-600 rounded-full " />
        </div>
        <div className="container mx-auto flex justify-around py-10 ">
          {videoData.map((elem, i) => {
            return (
              <div className="flex items-center justify-start rounded-lg  p-4  w-72 py-7 gap-4 mt-3 bg-[#ffeee9] relative">
                <p className="mr-2 text-orange-800 font-bold text-5xl">
                  {elem.num}
                </p>
                <div>
                  <h2 className="font-normal text-lg">{elem.heading}</h2>
                </div>
                <p className="absolute bg-orange-900 w-12 h-12  rounded-full -top-[15%] -right-[5%] text-center text-white font-bold text-3xl pt-2">
                  {elem.count}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Video sec */}

      {/* Best Deal */}
      <BestDeal />
      {/* Best Deal */}

      {/* property card sec */}

      <section className="container mx-auto  p-12">
        <div className="flex flex-col justify-center items-center p-8">
          <p className=" text-orange-800 border-l-4 border-red-800 font-bold text-xl px-4">
            Contact Us
          </p>
          <h1 className="text-3xl text-black font-extrabold my-4 leading-tight ">
            Get In Touch With Our Agents
          </h1>
        </div>
        <div className="flex flex-wrap gap-7 justify-center">
          <PropertyCard data={cardHome} />
        </div>
      </section>
      {/* property card sec */}

      {/* Contact sec */}

      <section
        style={{ backgroundImage: `url(${bgImage})` }}
        className="h-96 text-center flex flex-col  items-center py-12"
      >
        <p className=" text-orange-800 border-l-4 border-red-800 font-bold text-xl px-4">
          Contact Us
        </p>
        <h1 className="text-3xl text-white font-extrabold my-4 leading-tight w-1/2">
          Get In Touch With Our Agents
        </h1>
      </section>
      <section className="-mt-36">
        <div className="container mx-auto flex justify-between gap-10 ">
          <div className="w-3/5">
            <div className="w-full h-96 rounded-md">
              <iframe
                title="google-map"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <Contactinfo variant="home" />
          </div>
          <div className="w-2/5 shadow-lg">
            <Forms />
          </div>
        </div>
      </section>
      {/* Contact sec */}

      <Footer />
    </>
  );
};

export default Home;
