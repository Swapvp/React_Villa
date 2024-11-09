import React from "react";
import Nav from "../Components/Nav";
import Contactinfo from "../Components/Contactinfo";
import PageHeader from "../Components/PageHeader";
import Forms from "../Components/Forms";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <Nav />
      <PageHeader breadcrumbText="contact" heading="contact" />
      <section className="py-12 ">
        <div className="container mx-auto flex justify-between items-center ">
          <div className="w-2/5">
            <p className=" text-orange-800 border-l-4 border-red-800 font-bold text-xl px-4">
              Contact Us
            </p>
            <h1 className="text-5xl font-extrabold my-4 leading-tight">
              Get In Touch With Our Agents
            </h1>
            <p className="text-lg text-gray-500 my-7">
              When you really need to download free CSS templates, please
              remember our website TemplateMo. Also, tell your friends about our
              website. Thank you for visiting. There is a variety of Bootstrap
              HTML CSS templates on our website. If you need more information,
              please contact us.
            </p>
            <Contactinfo variant="contact" />
          </div>
          <div className="w-2/5 shadow rounded-2xl">
            <Forms />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
