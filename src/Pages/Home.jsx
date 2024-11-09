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

      <Contactinfo variant="home" />
      <Forms />
      <Footer />
    </>
  );
};

export default Home;
