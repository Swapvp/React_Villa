import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormContainer = styled.div`
  display: ${(props) => (props.variant === "home" ? "flex" : "w-full")};
  gap: 1rem;
`;

const Forms = ({ variant }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Minumn 2 characters")
        .max(20, "maximum 20 characters")
        .required("Full Name Required"),

      email: Yup.string().email("Enter valid email").required("Email Required"),

      subject: Yup.string()
        .min(2, "Minumn 2 characters")
        .max(10, "maximum 20 characters")
        .required("Subject Required"),

      message: Yup.string()
        .min(2, "Minumn 2 characters")
        .max(100, "maximum 20 characters")
        .required("Message Required"),
    }),

    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <FormContainer variant={variant} className="bg-white p-6">
      <form className="" onSubmit={formik.handleSubmit}>
        <div className="my-3">
          <label
            htmlFor="name"
            className="pl-3 text-md text-gray-500 font-medium "
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name..."
            className="bg-gray-300 px-5 py-3 my-2 rounded-full  outline-deep-orange-200 w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="text-red-500 text-center text-sm">
              {formik.errors.name}
            </p>
          ) : null}
        </div>
        <div className="my-3">
          <label
            htmlFor="email"
            className="pl-3 text-md text-gray-500 font-medium "
          >
            Email Address
          </label>

          <input
            type="email"
            nmae="email"
            id="email"
            placeholder="Your email..."
            className="bg-gray-300 px-5 py-3 my-2 rounded-full  outline-deep-orange-200 w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-center text-sm">
              {formik.errors.email}
            </p>
          ) : null}
        </div>
        <div className="my-3">
          <label
            htmlFor="subject"
            className="pl-3 text-md text-gray-500 font-medium "
          >
            Subject
          </label>

          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Your subject..."
            className="bg-gray-300 px-5 py-3 my-2 rounded-full  outline-deep-orange-200 w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <p className="text-red-500 text-center text-sm">
              {formik.errors.subject}
            </p>
          ) : null}
        </div>
        <div className="my-3">
          <label
            htmlFor="message"
            className="pl-3 text-md text-gray-500 font-medium "
          >
            Message
          </label>

          <textarea
            name="message"
            id="message"
            placeholder="your message..."
            className="bg-gray-300 px-5 py-3 my-2 rounded-2xl  outline-deep-orange-200 w-full h-40"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <p className="text-red-500 text-center text-sm">
              {formik.errors.message}
            </p>
          ) : null}
        </div>
        <div className="my-3">
          <button
            type="submit"
            className="bg-black text-white py-3 px-5 rounded-full"
          >
            Send Message
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default Forms;
