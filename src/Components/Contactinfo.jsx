import React from "react";
import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";

// Capitalize the component name
const DivContainer = styled.div`
  display: ${(props) => (props.variant === "home" ? "flex" : "block")};
  background: #fff;

  padding: ${(props) => (props.variant === "home" ? "1rem" : "0px")};
  gap: 1rem;
`;

const ContactInfo = ({ variant }) => {
  return (
    <DivContainer variant={variant}>
      <div className="flex items-center justify-start bg-white shadow-lg  p-4 rounded w-80 py-7 gap-4 mt-3">
        <FiPhoneCall className="mr-2 text-orange-500 text-5xl" />
        <div>
          <h2 className="font-bold text-2xl">010-020-0340</h2>
          <p className="text-lg text-gray-500">Phone Number</p>
        </div>
      </div>
      <div className="flex items-center justify-start bg-white shadow-lg  p-4 rounded w-80 py-7 gap-4 mt-3">
        <FaRegEnvelope className="mr-2 text-orange-500 text-5xl" />
        <div>
          <h2 className="font-bold text-2xl">info@villa.co</h2>
          <p className="text-lg text-gray-500">Business Email</p>
        </div>
      </div>
    </DivContainer>
  );
};

export default ContactInfo;
