import React from "react";
import ChartFirst from "./ChartFirst";
import Bar from "../bar";
import SecondChart from "./secondChart";
import Piechart from "./piechart";
import ThirdLineChart from "./ThirdLineChart";
import FourChart from "./FourChart";
const BarChart = () => {
  return (
    <div>
      <div className=" max-sm:mt-4  shadow-default max-sm:gap-4 flex flex-wrap items-start justify-between gap-8 sm:flex-wrap lg:flex-nowrap lg:w-full pt-4 pr-0 max-sm:pr-0  max-md:gap-4 max-md:pt-0 mt-4 sm:mb-4 lg:mb-8 max-sm:mb-4 md:mb-8">
        <div className="lg:w-3/5 sm:w-full md:w-full max-sm:w-full shadow-md bg-white ">
          <ThirdLineChart />
        </div>
        <span className="lg:w-2/5  shadow-md sm:w-full md:w-full max-sm:w-full bg-white">
          <Piechart />
        </span>
      </div>

      <span className="lg:w-2/5  shadow-md sm:w-full md:w-full max-sm:w-full bg-white ">
        <SecondChart />
      </span>
      <div className=" max-sm:mt-4  shadow-default max-sm:gap-4 flex flex-wrap items-start justify-between gap-8 sm:flex-wrap lg:flex-nowrap lg:w-full pt-4 pr-0 max-sm:pr-0  max-md:gap-4 max-md:pt-0 mt-4 sm:mb-4 lg:mb-8 max-sm:mb-4 md:mb-8">
        <div className="lg:w-3/5 sm:w-full md:w-full max-sm:w-full shadow-md bg-white ">
          {" "}
          <FourChart />
        </div>
        <span className="lg:w-2/5  shadow-md sm:w-full md:w-full max-sm:w-full bg-white">
          <Bar />{" "}
        </span>
      </div>
    </div>
  );
};

export default BarChart;
