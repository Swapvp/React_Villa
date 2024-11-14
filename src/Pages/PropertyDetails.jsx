import React from "react";
import Nav from "../Components/Nav";
import PageHeader from "../Components/PageHeader";
import InfoTable from "../Components/InfoTable";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import BestDeal from "../Components/BestDeal";
import Footer from "../Components/Footer";

const PropertyDetails = () => {
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

  return (
    <>
      <Nav />
      <PageHeader
        breadcrumbText="properties details"
        heading="properties details"
      />

      <section className="py-12">
        <div className="container mx-auto flex gap-12">
          <div className="w-3/5">
            <img
              src="./src/assets/images/single-property.jpg"
              alt=""
              className="h-full object-cover"
            />
          </div>
          <div className="w-2/5">
            <InfoTable data={featureData} />
          </div>
        </div>
        <div className="container mx-auto">
          <p className="px-4 py-2 text-sm bg-red-100 rounded-lg w-fit my-5">
            Apparment
          </p>
          <p className="text-black font-bold text-2xl my-3">
            24 New Street Miami, OR 24560
          </p>
          <p className="text-md text-gray-600 w-1/2 my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id hic
            natus quis fugit numquam omnis ipsa animi nulla saepe reprehenderit,
            atque veritatis quae ut soluta aliquid fugiat unde autem delectus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id hic
            natus quis fugit numquam omnis ipsa animi nulla saepe reprehenderit,
            atque veritatis quae ut soluta aliquid fugiat unde autem delectus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-md text-gray-600 w-1/2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id hic
            natus quis fugit numquam omnis ipsa animi nulla saepe reprehenderit,
            atque veritatis quae ut soluta aliquid fugiat unde autem delectus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id hic
            natus quis fugit numquam omnis ipsa animi nulla saepe reprehenderit,
            atque veritatis quae ut soluta aliquid fugiat unde autem delectus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className=" bg-blue-gray-50 p-6 my-5 w-1/2">
            <Accordion className="" open={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                How to use Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                What can I do with Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </section>
      <BestDeal />
      <Footer />
    </>
  );
};

export default PropertyDetails;
