import React, { Suspense } from "react";
import { ledInstalltion, ledRepair } from "./Components/links";
import NoData from "@/public/images/no_product_data.svg";
import HomepageButtonComp from "../ui/homepage/HomepageButtonComp";
import Image from "next/image";
import ProblemCards from "../Components/ProblemCards";
import { CardSkeleton, CardsSkeleton } from "../ui/Skelton";
import RequestCards from "./Components/RequestCards";

const Page = () => {
  return (
    <div className="mt-32 font-baijam">
      <div className="w-[70%] mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between text-3xl text-t-blue font-extrabold leading-7">
            <h3>My Requests</h3>
            <HomepageButtonComp title="New Service request" />
          </div>
          <Suspense fallback={<CardsSkeleton />}>
            <RequestCards />
          </Suspense>
          <div
            className={`flex flex-col justify-center items-center my-10 relative`}
          >
            <Image
              src={NoData}
              alt="no request found"
              height={200}
              width={200}
            />

            <h1 className="text-center text-2xl m-5 font-semibold font-manrop">
              No request found
            </h1>
          </div>

          <div className="font-baijam">
            <div className="mt-4">
              <h1 className="text-2xl font-extrabold text-t-blue">
                TV Repair LED/LCD/OLED
              </h1>
            </div>

            <div className="flex flex-row flex-wrap gap-5 rounded-t-lg mt-8">
              {ledRepair.map(({ id, title, image, range, referProp }) => {
                return (
                  <div key={id}>
                    {
                      <ProblemCards
                        image={image}
                        title={title}
                        range={range}
                        referProp={referProp}
                      />
                    }
                  </div>
                );
              })}
            </div>
            <div className="font-baijam my-16">
              <div className="">
                <h1 className="text-2xl font-extrabold text-t-blue">
                  LED/LCD/OLED Installation
                </h1>
              </div>

              <div className="flex flex-row flex-wrap gap-5 rounded-t-lg mt-8">
                {ledInstalltion.map(
                  ({ id, title, image, range, referProp }) => {
                    return (
                      <div key={id}>
                        {
                          <ProblemCards
                            image={image}
                            title={title}
                            range={range}
                            referProp={referProp}
                          />
                        }
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
