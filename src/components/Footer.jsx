import React from "react";
import { logo2, payment } from "../assets";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont px-5">
      <div className="max-w-screen-xl mx-auto grid xs:grid-cols-2 grid-cols-4">
        <div className="flex flex-col gap-3">
          <img className="xs:w-28 w-32" src={logo2} alt="" />
          <p className="ml-4 xs:text-xs text-white text-sm tracking-wide">
            © ReactDB.com
          </p>
          <img className=" xs:w-32 w-56 ml-2" src={payment} alt="" />
          <div className="flex xs:gap-0 gap-2 text-gray-500 xs:w-32">
            <ImGithub className="xs:ml-2 ml-4 text-lg hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="xs:ml-2 ml-4 text-lg hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="xs:ml-2 ml-4 text-lg hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="xs:ml-2 ml-4 text-lg hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="xs:ml-2 ml-4 text-lg hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="xs:hidden">
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className=" text-base flex flex-col gap-3">
            <p>Tanishk Soam Developer</p>
            <p>Mobile: 9897283397</p>
            <p>Email: soamtanishk@gmail.com</p>
            <p>Address: Pune, Maharashtra</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4"> Profile</h2>
          <div className="flex flex-col gap-3 text-base">
            <p className="flex gap-2 items-center hover:text-white duration cursor-pointer">
              <span className="text-lg">
                {" "}
                <BsPersonFill />
              </span>{" "}
              my account
            </p>
            <p className="flex gap-2 items-center hover:text-white duration cursor-pointer">
              <span className="text-lg">
                {" "}
                <MdLocationOn />
              </span>{" "}
              Help & Support
            </p>
            <p className="flex gap-2 items-center hover:text-white duration cursor-pointer">
              <span className="text-lg">
                {" "}
                <BsPaypal />
              </span>{" "}
              Paypal
            </p>
            <p className="flex gap-2 items-center hover:text-white duration cursor-pointer">
              <span className="text-lg">
                {" "}
                <FaHome />
              </span>{" "}
              Order Tracking
            </p>
          </div>
        </div>
        <div className=" xs:hidden flex flex-col justify-center">
          <input
            type="text"
            className=" bg-transparent border px-4 py-2 text-sm "
            placeholder="E-mail"
          />
          <button className="text-sm border bg-transparent text-center hover:text-black hover:bg-white duration-300 cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
