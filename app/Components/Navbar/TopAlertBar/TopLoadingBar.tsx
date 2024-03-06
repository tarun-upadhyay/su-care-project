"use client";
import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const TopLoadingBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (progress < 100) setProgress(progress + 10);
  }, [progress]);
  return (
    <LoadingBar
      color="#f11946"
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default TopLoadingBar;
