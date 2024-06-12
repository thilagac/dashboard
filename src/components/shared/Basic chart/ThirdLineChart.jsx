import React from "react";
import ReactEcharts from "echarts-for-react";
import { Title } from "@tremor/react";
const ThirdLineChart = () => {
  const option = {
    title: {
      text: "World Population",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
    },
    series: [
      {
        name: "2011",
        type: "bar",
        data: [18203, 23489, 29034, 104970, 131744, 630230],
      },
      {
        name: "2012",
        type: "bar",
        data: [19325, 23438, 31000, 121594, 134141, 681807],
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

export default ThirdLineChart;
