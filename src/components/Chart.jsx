import React from "react";
import ChartGraph from "./shared/Linechart";
import Bar from "./shared/bar";
import DonutChartUsage from "./shared/radiochart";
import Map from "./shared/Map";
import Table from "./shared/Table";
import Review from "./shared/review";

const Chart = () => {
  return (
    <div className=" ">
      <div className="  ">
        <div className=" max-sm:mt-4  shadow-default max-sm:gap-4 flex flex-wrap items-start justify-between gap-8 sm:flex-wrap lg:flex-nowrap lg:w-full pt-4 pr-0 max-sm:pr-0  max-md:gap-4 max-md:pt-0 mt-4">
          <div className="lg:w-3/5 sm:w-full md:w-full max-sm:w-full shadow-md bg-white">
            <ChartGraph />
          </div>
          <span className="lg:w-2/5  shadow-md sm:w-full md:w-full max-sm:w-full bg-white">
            <Bar />
          </span>
        </div>
      </div>
      <div className=" flex flex-wrap pt-4 max-sm:pt-4  max-md:pt-4  max-sm:flex-wrap lg:flex-nowrap lg:w-full gap-8 max-sm:gap-4 max-md:gap-4   pr-0">
        <div className="lg:full max-sm:w-full sm:w-full md:w-full m-0 mt-4 max-sm:mt-0 shadow-md  max-md:mt-0 ">
          <Map />
        </div>
      </div>
      <div className="shadow-default pt-3 flex flex-wrap items-start justify-between gap-4 sm:flex-wrap lg:flex-nowrap lg:w-full  max-md:gap-4 max-md:pt-0 ">
        <div className=" pt-3 max-sm:pt-0 flex flex-wrap items-start justify-between gap-8 max-sm:gap-4 max-md:gap-4 sm:flex-wrap lg:flex-nowrap lg:w-full ">
          <div className="lg:w-3/5 max-sm:w-full sm:w-full md:w-full m-0 mt-2 shadow-md max-sm:mt-4 ">
            <Table />
          </div>
          <div className="lg:w-2/5 max-sm:w-full sm:w-full md:w-full m-0 max-sm:mt-0 max-md:mt-0 mt-2 shadow-md  ">
            <Review />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
