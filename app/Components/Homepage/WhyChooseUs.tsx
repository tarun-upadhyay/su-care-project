import Image from "next/image";
import React from "react";
import familyImg from "@/public/images/familyRelaxed.jpg";
import saveTime from "@/public/images/saveTime.jpg";
import saveMoney from "@/public/images/saveMoney.png";
import hasslefree from "@/public/images/hassleFree.png";
const WhyChooseUs = () => {
  return (
    <div className="w-[90%] m-auto">
      <div className="flex flex-col justify-center items-center font-baijam">
        <h3 className="text-center text-3xl sm:text-4xl font-bold">
          Why Choose SU Care?
        </h3>
        <section className="flex sm:flex-row flex-col text-[#303030] gap-4 my-10 p-5">
          <div className="p-10 pr-24 bg-[#ffffff] rounded-xl shadow-xl border border-gray-300">
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <circle
                    fill="#E9F1FF"
                    className="fill-bg-light"
                    cx="20"
                    cy="20"
                    r="20"
                  ></circle>
                  <path
                    fill="#4D61FC"
                    className="fill-main"
                    d="M13 13h6v6h-6zM21 13h6v6h-6zM13 21h6v6h-6z"
                  ></path>
                  <path
                    fill="#00396B"
                    className="fill-secondary"
                    d="M21 21h6v6h-6z"
                  ></path>
                </g>
              </svg>
            </div>
            <h5 className="font-bold leading-6 text-xl my-3 mt-5">
              Expert Technicians
            </h5>
            <p className="text-base leading-6 font-normal">
              Our technicians are trained and certified.
            </p>
            <div className="text-sm leading-4 font-bold text-[#4d61fc] mt-3 cursor-pointer hover:scale-105 duration-200">
              Learn More <span className="ml-1">&#8594;</span>
            </div>
          </div>
          <div className="p-10 pr-24 bg-[#f6f6f6] rounded-xl border border-gray-300">
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <circle
                    fill="#E9F1FF"
                    className="fill-bg-light"
                    cx="20"
                    cy="20"
                    r="20"
                  ></circle>
                  <g transform="translate(13 15)">
                    <rect
                      fill="#4D61FC"
                      className="fill-main"
                      y="1"
                      width="8.556"
                      height="8.556"
                      rx="4.278"
                    ></rect>
                    <rect
                      className="fill-bg-light"
                      fill="#E9F1FF"
                      x="5.04"
                      width="10.56"
                      height="10.56"
                      rx="5.28"
                    ></rect>
                    <rect
                      className="fill-secondary"
                      fill="#00396B"
                      x="6.4"
                      y="1"
                      width="8.556"
                      height="8.556"
                      rx="4.278"
                    ></rect>
                  </g>
                </g>
              </svg>
            </div>
            <h5 className="font-bold leading-6 text-xl my-3 mt-5">
              Doorstep Service
            </h5>
            <p className="text-base leading-6 font-normal">
              We provide service at your convenience.
            </p>
            <div className="text-sm leading-4 font-bold text-[#4d61fc] mt-3 cursor-pointer hover:scale-105 duration-200">
              Book Now <span className="ml-1">&#8594;</span>
            </div>
          </div>
        </section>
      
      </div>
    </div>
  );
};

export default WhyChooseUs;
