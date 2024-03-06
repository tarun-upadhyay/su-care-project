import Image from "next/image";
import React, { Suspense } from "react";
import HomepageCompBtn from "./Components/Homepage/HomepageCompBtn";
import HeroImg3 from "@/public/images/1.png";
import HeroImg2 from "@/public/images/2.jpg";
import HeroImg1 from "@/public/images/3.png";
import MobileHeroSectionCarousel from "./Components/Homepage/MobileHeroSectionCarousel";
import ServiceHomepage from "./Components/Homepage/ServiceHomepage";
import WhyChooseUs from "./Components/Homepage/WhyChooseUs";
import Expertise from "./Components/Homepage/Expertise";
import CardSkeleton from "./ui/loading/CardSkeleton";
import TestimonialSection from "./ui/homepage/TestimonialSection";

const Home = () => {
  return (
    <div className="mt-20 sm:pt-8 pt-2">
      <main className="h-full bg-[#E4F1FF] pb-10 sm:pt-10 sm:px-10">
        <div className="lg:w-[85%] mx-auto  font-baijam">
          <div className="flex flex-col md:flex-row md:pr-5 px-2 py-10 pb-12">
            <div className="md:w-[50%] w-[100%]">
              <div className="md:w-[90%] md:pr-10 p-3 pb-2">
                <p className="font-extrabold text-2xl md:text-3xl text-t-blue">
                  WELCOME TO SU CARE
                </p>

                <h1 className="text-[2rem] md:text-[2.5rem] leading-10 font-bold mt-4 mb-3 mr-6">
                  {" "}
                  Get in touch with experts and give your old TV a new life !
                </h1>
                <h3 className="text-lg font-dmsans font-semibold">
                  Your one-stop solution for TV repair services at your
                  doorstep.
                </h3>
              </div>
              <div className="md:w-[35%] w-[70%] pl-3">
                <HomepageCompBtn title="book a Service" />
                <p className="text-base font-baijam font-bold">
                  Fast, reliable, and convenient
                </p>
              </div>
            </div>
            <div className="md:w-[50%] hidden sm:flex gap-x-5">
              <div className="mt-24">
                <figure>
                  <Image
                    src={HeroImg1}
                    alt="hero image"
                    width={370}
                    className="bg-cover h-[280px] rounded-xl z-20 hidden sm:block"
                  />
                </figure>
              </div>
              <div className="flex flex-col gap-5">
                <figure>
                  <Image
                    src={HeroImg2}
                    alt="hero image"
                    width={370}
                    className="bg-cover h-[260px] rounded-xl hidden sm:block"
                  />
                </figure>
                <figure>
                  <Image
                    src={HeroImg3}
                    alt="hero image"
                    width={370}
                    className="bg-cover h-[200px] rounded-xl hidden sm:block"
                  />
                </figure>
              </div>
            </div>
            <div className="sm:hidden mt-5 block">
              <Suspense fallback={<CardSkeleton />}>
                <MobileHeroSectionCarousel />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      {/* Begining of Service */}
      <section className="sm:mt-40 ">
        <ServiceHomepage />
      </section>
      {/* End of SErvice */}

      {/* Begining of Why Choice us */}

      <WhyChooseUs />
      {/* End of Why Choice us */}

      {/* beginging of Expertise in */}
      <Suspense fallback={<CardSkeleton />}>
        <Expertise />
      </Suspense>
      {/* End of Expertise in */}
      {/* <TestimonialSection /> */}
    </div>
  );
};

export default Home;
