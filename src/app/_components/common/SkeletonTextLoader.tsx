
import clsx from "clsx";
import React from "react";

const SkeletonTextLoader = ({ width }: { width?: number }) => {
  return (
    <div
      className={" bg-gray-light rounded-lg shadow-md p-1 animate-pulse w-13"}
    >
      <div className={clsx(`w-${width} bg-white rounded mb-3 `)}></div>
    </div>
  );
};

export default SkeletonTextLoader;
