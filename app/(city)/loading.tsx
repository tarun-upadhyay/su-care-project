import React from "react";
import Skeleton from "react-loading-skeleton";

const loading = () => {
  return (
    <div>
      <Skeleton count={50} />
    </div>
  );
};

export default loading;
