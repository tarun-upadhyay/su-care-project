import React, { Suspense } from "react";

import RegisterFormComponent from "../Component/RegisterFormComponent";
import Skeleton from "react-loading-skeleton";
import RegisterLoginButton from "../Component/RegisterLoginButton";
const page = () => {
  return (
    <main className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
      <div className="mt-3 flex items-center space-x-6 justify-center">
        <RegisterLoginButton />
      </div>
      <p className="my-5 text-center font-baijam font-bold">-- OR --</p>
      <Suspense fallback={<Skeleton count={10} />}>
        <RegisterFormComponent />
      </Suspense>
    </main>
  );
};

export default page;
