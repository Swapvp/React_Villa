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
      heading: "250 m2",
      subHeading: "Total Flat Space",
    },
    {
      src: "src/assets/images/info-icon-03.png",
      heading: "250 m2",
      subHeading: "Total Flat Space",
    },
    {
      src: "src/assets/images/info-icon-04.png",
      heading: "250 m2",
      subHeading: "Total Flat Space",
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
        <div className="flex gap-8 w-full justify-center">
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
          <div className="bg-white shadow-lg w-[25%] ">
            {featureData.map((elem, i) => {
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
        </div>
      </section>
      {/* Section 2 */}

      {/* Contact sec */}

      <section
        style={{ backgroundImage: `url(${bgImage})` }}
        className="h-96 text-center flex flex-col  items-center py-12"
      >
        <p className=" text-orange-800 border-l-4 border-red-800 font-bold text-xl px-4">
          Contact Us
        </p>
        <h1 className="text-5xl text-white font-extrabold my-4 leading-tight w-1/2">
          Get In Touch With Our Agents
        </h1>
      </section>
      <section className="-mt-36">
        <div className="container mx-auto flex justify-between gap-10 ">
          <div className="w-3/5">
            <div className="w-full h-96 rounded-md">
              <iframe
                title="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4348392449994!2d-122.4210912846821!3d37.77926097975606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818fd26b4f3d%3A0x7a7b8748493e9dd2!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
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
