import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Chart from "../Chart";

export default function Layout() {
  return (
    <div className=" w-screen overflow-hidden flex flex-row ">
      <div className="h-screen">
        <Sidebar />
      </div>

      <div className="flex h-lvh flex-col flex-1  w-full max-sm:w-full max-md:w-full lg:w-2 md:w-full xl:w-1/2  ">
        <div className="max-sm:w-full">
          <Header />
        </div>
        <div className="flex-1 flex-row p-4 overflow-x-hidden h-screen overflow-y-auto bg-slate-100 max-sm:w-full max-md:w-full  ">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
