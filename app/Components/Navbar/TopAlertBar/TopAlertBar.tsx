import React from "react";
import { MdLocationPin } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import {
  BsClockFill,
  BsFacebook,
  BsLinkedin,
  BsFillTelephoneFill,
} from "react-icons/bs";
import BookNowButton from "./BookNowButton";
const TopAlertBar = () => {
  return (
    <div className="bg-t-blue  font-dmsans max-w-[100vw] text-[16px] px-2 md:px-10 xl:px-28 py-2">
      <div className="flex justify-between text-[#ffffff] font-extrabold">
        {/* location and timing */}
        <div className="flex gap-5">
          <div className="leading-5 flex items-center gap-2">
            <MdLocationPin />
            <span>Gurgaon</span>
          </div>
          <div className="leading-5 flex items-center gap-2">
            <MdLocationPin />
            <span>New Delhi</span>
          </div>
          <div className="leading-7 hidden sm:flex items-center gap-2">
            <BsClockFill />
            <span>Everday: 09:00 AM - 07:00PM</span>
          </div>
        </div>
        {/* Booking and social Media */}
        {/* Social media */}
        <div className="flex sm:gap-5 gap-1  xl:w-[30%] justify-center items-center">
          <div className="hidden xxs:flex sm:gap-5 gap-1">
            <a href="tel:+919811214881">
              <BsFillTelephoneFill className="text-xl cursor-pointer xxs:block" />
            </a>
            <a href="https://www.facebook.com/sucaretv" target="_blank">
              <BsFacebook className="text-xl cursor-pointer hidden md:block" />
            </a>
            <a href="https://www.instagram.com/sucaretv" target="_blank">
              <GrInstagram className="text-xl cursor-pointer  hidden lg:block" />
            </a>
            <BsLinkedin className="text-xl cursor-pointer  hidden lg:block" />
          </div>

          <BookNowButton />
        </div>
      </div>
    </div>
  );
};

export default TopAlertBar;
