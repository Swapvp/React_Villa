import React from "react";
import { NavLink } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import "../App.css";

const Nav = () => {
  return (
    <>
      <div className="hidden md:flex p-3 px-12 justify-between">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <FaEnvelope className="text-orange-500 text-xl" />
            <p className="px-5">info@company.com</p>
          </div>
          <div className="flex items-center justify-center">
            <FaMap className="text-orange-500 text-xl" />
            <p className="px-5">Sunny Isles Beach, FL 33160</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <FaFacebook className="hover:text-orange-500 text-2xl text-slate-500" />
          <FaSquareXTwitter className="hover:text-orange-500 text-2xl text-slate-500" />
          <FaLinkedin className="hover:text-orange-500 text-2xl text-slate-500" />
          <FaSquareInstagram className="hover:text-orange-500 text-2xl text-slate-500" />
        </div>
      </div>

      <nav className="bg-slate-100 p-8 px-12">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold">VILLA</div>
          <div className="">
            <ul className="flex gap-10 text-lg ">
              <li className="font-normal">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : ""
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="font-normal">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : ""
                  }
                  to={"/properties"}
                >
                  Properties
                </NavLink>
              </li>
              <li className="font-normal">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : ""
                  }
                  to={"/property-details"}
                >
                  Property Details
                </NavLink>
              </li>
              <li className="font-normal">
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
