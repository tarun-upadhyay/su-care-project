import Marquee from "react-fast-marquee";
import sony_logo from "@/public/logos/Sony_logo.svg.png";
import samsung_logo from "@/public/logos/Samsung_Logo.svg.png";
import lg_logo from "@/public/logos/lg_Logo.png";
import toshiba_logo from "@/public/logos/TOSHIBA_Logo.png";
import hitachi_logo from "@/public/logos/Hitachi_inspire_the_next-Logo.svg.png";
import lloyd_logo from "@/public/logos/lloyd-logo-1024x768.png";
import micromax_logo from "@/public/logos/Micromax-logo.png";
import panasonic_logo from "@/public/logos/Panasonic-logo.png";
import vu_logo from "@/public/logos/vu_logo.png";
import mi_logo from "@/public/logos/Xiaomi-logo.png";

import Image from "next/image";
const Expertise = () => {
  return (
    <div className="w-[80%] mx-auto font-baijam font-bold my-16">
      <h3 className="text-center text-4xl">Our Expertise</h3>
      <div className="my-3 mt-10">
        <Marquee
          pauseOnHover={true}
          style={{ display: "flex", overflowX: "scroll", overflow: "hidden" }}
          speed={80}
        >
          <div className="flex">
            {" "}
            <Image
              src={sony_logo}
              alt="sony logo"
              className=" h-[35px] w-[250px] relative top-2 mx-8"
            />
            <Image
              src={samsung_logo}
              alt="samsung logo"
              className=" h-[50px] w-[250px] mx-8"
            />
            <Image
              src={lg_logo}
              alt="lg logo"
              className="h-[70px] w-[150px] mx-8"
            />
            <Image
              src={mi_logo}
              alt="mi logo"
              className=" h-[65px] w-[70px] mx-8"
            />
            <Image
              src={toshiba_logo}
              alt="toshiba logo"
              className=" h-[120px] w-[250px] relative bottom-5 mx-8"
            />
            <Image
              src={panasonic_logo}
              alt="panasonic logo"
              className="w-[250px] h-[150px] relative bottom-10 mx-8"
            />
            <Image
              src={vu_logo}
              alt="vu logo"
              className="w-[150px] h-[60px] relative top-2 mx-8"
            />
            <Image
              src={hitachi_logo}
              alt="hitachi logo"
              className="w-[160px] h-[40px] relative top-2 mx-8"
            />
            <Image
              src={lloyd_logo}
              alt="llyod logo"
              className="w-[250px] h-[48px] mx-8"
            />
            <Image
              src={micromax_logo}
              alt="micromax logo"
              className="w-[240px] h-[150px] mx-8 relative bottom-10"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Expertise;
