import React from "react";

import bgImage from "../assets/images/page-heading-bg.jpg";
import { Link } from "react-router-dom";
const PageHeader = ({ breadcrumbText, heading }) => {
  return (
    <section
      className="bg-black h-80 flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="bg-white w-auto px-5 py-2 text-black text-md uppercase">
          <Link to="/">Home</Link> / {breadcrumbText}
        </div>
        <h1 className="uppercase text-white font-extrabold text-6xl">
          {heading}
        </h1>
      </div>
    </section>
  );
};

export default PageHeader;
