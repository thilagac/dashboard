import React from "react";
import ReactEcharts from "echarts-for-react";
import { Title } from "@tremor/react";
const Piechart = () => {
  const option = {
    title: {},
    tooltip: {
      trigger: "item",
    },

    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <div className=" rounded-sm border border-stroke bg-white h-1/2  px-5 pb-5 pt-7.5 shadow-default sm:px-7.5 xl:col-span-5  lg:w-full sm:w-full md:w-full  shadow-md ">
      <Title className="mb-2 p-4">My admin dashboard</Title>
      <ReactEcharts option={option} />
    </div>
  );
};

export default Piechart;
