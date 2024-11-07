import React from "react";
import Nav from "../Components/Nav";
import Contactinfo from "../Components/Contactinfo";
import PageHeader from "../Components/PageHeader";

const Contact = () => {
  return (
    <div>
      <Nav />
      <PageHeader breadcrumbText="contact" heading="contact" />
      <Contactinfo variant="contact" />;
    </div>
  );
};

export default Contact;
