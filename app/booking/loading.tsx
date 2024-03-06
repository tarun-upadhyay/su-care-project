import React from "react";
import Skeleton from "react-loading-skeleton";
import TopLoadingBar from "../Components/Navbar/TopAlertBar/TopLoadingBar";

const loading = () => {
  return (
    <div>
      <TopLoadingBar />
      <Skeleton count={50} />
    </div>
  );
};

export default loading;
