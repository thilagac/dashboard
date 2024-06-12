import { DonutChart, Legend } from "@tremor/react";
import * as echarts from "echarts";
import { MapData } from "../../lib/data";

function Map() {
  return (
    <>
      <div className="col-span-12 rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5 h-auto">
        <div className="border-b border-stroke px-4 pb-5 pt-2 dark:border-strokedark md:px-6 xl:px-7.5">
          <h2 className="p-5 text-left px-0 text-lg font-bold">Leads Report</h2>
          <div className="flex items-center gap-3  text-gray-500">
            <div className="w-2/12 xl:w-3/12">
              <span className="font-medium">Name</span>
            </div>
            <div className="w-6/12 2xsm:w-5/12 md:w-3/12">
              <span className="font-medium">Email</span>
            </div>
            <div className="hidden w-4/12 md:block xl:w-3/12">
              <span className="font-medium">Project</span>
            </div>
            <div className="hidden w-1/12 xl:block">
              <span className="font-medium">Duration</span>
            </div>

            <div className="w-4/12 2xsm:w-3/12 md:w-2/12 xl:w-1/12 text-center">
              <span className="font-medium">Status</span>
            </div>
            <div className="hidden w-2/12 text-center 2xsm:block md:w-1/12">
              <span className="font-medium">Action</span>
            </div>
          </div>
        </div>
        <div className="p-0 md:p-6 xl:p-7.5">
          {MapData.map((map) => (
            <div className="flex flex-col gap-7  text-gray-500 ">
              <div className="flex items-center gap-3 p-1">
                <div className="w-2/12 xl:w-3/12">
                  <div className="flex items-center gap-4 p-2 ">
                    <div className="2xsm:h-11 2xsm:w-full 2xsm:max-w-11 2xsm:rounded-full">
                      <img src={map.Img} alt="User" className="w-12" />
                    </div>
                    <span className="hidden font-medium xl:block">
                      {map.Name}
                    </span>
                  </div>
                </div>
                <div className="w-6/12 2xsm:w-5/12 md:w-3/12">
                  <span className="font-medium">{map.email}</span>
                </div>
                <div className="hidden w-4/12 md:block xl:w-3/12">
                  <span className="font-medium">25 Dec 2024 - 28 Dec 2024</span>
                </div>
                <div className="hidden w-1/12 xl:block">
                  <span className="font-medium">3 Days</span>
                </div>
                <div className="w-4/12 2xsm:w-3/12 md:w-2/12 xl:w-1/12">
                  <span className="inline-block rounded  py-0.5 px-2.5 text-sm font-medium bg-red/[0.08] text-red ">
                    Lost Lead
                  </span>
                </div>
                <div className="hidden w-2/12 2xsm:block md:w-1/12">
                  <button className="mx-auto block hover:text-meta-1">
                    jjj
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Map;
