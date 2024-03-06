import React from "react";
import Skeleton from "react-loading-skeleton";
import CardSkeleton from "../ui/loading/CardSkeleton";

const page = () => {
  return (
    <div className="mt-36 flex gap-5">
      <div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <div className="animate-pulse bg-gray-300 h-6 mb-4"></div>

          <div className="animate-pulse bg-gray-300 h-4 "></div>

          <div className="animate-pulse bg-gray-300 h-4 mt-4"></div>
        </div>
      </div>
      <CardSkeleton />
    </div>
  );
};

export default page;
