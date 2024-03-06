import Image from "next/image";
import React from "react";
import installing from "@/public/images/installation.jpg";
import repairing from "@/public/images/service-1.png";
import selling from "@/public/images/buyTv.jpg";
import HomepageButtonComp from "@/app/ui/homepage/HomepageButtonComp";
const ServiceHomepage = () => {
  return (
    <div className="lg:w-[85%] w-[95%] mx-auto font-baijam flex flex-col items-center font-bold my-16">
      <div className="m-11">
        <h2 className="text-center text-4xl">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 font-manrop">
        <div className="duration-200 hover:scale-105 shadow-xl rounded-b-2xl">
          <Image
            className="h-[230px] w-[100%] rounded-t-2xl"
            src={installing}
            alt="Tv installtion"
            width={400}
          />
          <div className="flex m-5 p-2 flex-col ">
            <h3 className="text-[#1450A3] text-base">
              {" "}
              -{" "}
              <span className="hover:underline duration-200 cursor-pointer">
                TV Installation
              </span>
            </h3>
            <h3 className="text-[#0d1013] text-base my-5 text-left">
              {" "}
              We offer comprehensive wall installation and uninstallation
              services for all types of LED/LCD/OLED TVs.
            </h3>
            <section>
              {" "}
              <p className="font-dmsans text-sm font-semibold text-[#60697b] mb-1">
                 A wide range of sizes from 21 inches to 105 inches. Whatever
                wall mount method you prefer - straightforward or rotating - our
                team is ready to assist you in ensuring a secure and customized
                installation for your LED/LCD/OLED/PHOTO FRAME TVs.
              </p>
            </section>
            <HomepageButtonComp title={"Book a Installation"} />
          </div>
        </div>
        <div className="duration-200 hover:scale-105 shadow-2xl rounded-b-2xl">
          <Image
            className="h-[230px] w-[100%] rounded-t-2xl"
            src={repairing}
            alt="Tv repairing"
            width={400}
          />
          <div className="flex m-5 p-2 flex-col">
            <h3 className="text-[#1450A3] text-base">
              {" "}
              -{" "}
              <span className="hover:underline duration-200 cursor-pointer">
                TV Repair
              </span>
            </h3>
            <h3 className="text-[#0d1013] text-base my-5 text-left">
              {" "}
              Our technicians specialize in repairing all brands and models of
              LED/LCD/OLED TVs, restoring them to working condition.
            </h3>
            <p className="font-dmsans text-sm font-semibold text-[#60697b] mb-1 text-justify">
               Our TV repair service caters to all brands and any issues your TV
              might face. It doesnt matter if display issue, sound issue,
              physical damage, backlight malfunction, or even complete
              malfunction, our technicians are capable of diagnosing and
              repairing it.
            </p>

            <HomepageButtonComp title={"book a Repaing"} />
          </div>
        </div>
        <div className="duration-200 hover:scale-105 shadow-2xl rounded-b-2xl">
          {" "}
          <Image
            className="h-[230px] w-[100%] rounded-t-2xl"
            src={selling}
            alt="Tv selling"
            width={400}
          />
          <div className="flex m-5 p-2 flex-col">
            <h3 className="text-[#1450A3] text-base">
              {" "}
              -{" "}
              <span className="hover:underline duration-200 cursor-pointer">
                Buy Refurbished TV
              </span>
            </h3>
            <h3 className="text-[#0d1013] text-base my-5 text-justify">
              {" "}
              Discover budget-friendly refurbished TVs, without compromising
              quality with a warranty for peace of mind.
            </h3>
            <p className="font-dmsans text-sm font-semibold text-[#60697b] mb-1 text-justify">
              Check out our selection of good condition refurbished TVs. Our
              money-back guarantee allows you to buy with confidence. As an
              additional benefit, each TV is backed by a 3-month warranty,
              ensuring your satisfaction and uninterrupted viewing enjoyment.
            </p>

            <HomepageButtonComp title={"Buy refurbished TV"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHomepage;
// //
// Our skilled technicians specialize in repairing all brands and models of LED/LCD/OLED TVs, restoring them to working condition.
