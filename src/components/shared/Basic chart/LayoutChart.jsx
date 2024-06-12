import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";

import Profile from "../Profile";
import BarChart from "./BarChart";
const LayoutChart = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1 h-screen w-full max-sm:w-full max-md:w-full lg:w-2 md:w-full xl:w-1/2  ">
        <div className="max-sm:w-full">
          <Header />
        </div>
        <div className="flex-1 flex-row p-4 overflow-x-hidden overflow-y-auto bg-slate-100 max-sm:w-full max-md:w-full  ">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default LayoutChart;
