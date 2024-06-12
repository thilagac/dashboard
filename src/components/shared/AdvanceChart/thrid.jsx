import React from "react";
import ReactEcharts from "echarts-for-react";
import { Title } from "@tremor/react";
import * as echarts from "echarts";
const Third = () => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {
      data: ["Evaporation", "Precipitation", "Temperature"],
    },
    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Precipitation",
        min: 0,
        max: 250,
        interval: 250,
        axisLabel: {
          formatter: "{value} ml",
        },
      },
      {
        type: "value",
        name: "Temperature",
        min: 0,
        max: 25,
        interval: 545,
        axisLabel: {
          formatter: "{value} °C",
        },
      },
    ],
    series: [
      {
        name: "Evaporation",
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " ml";
          },
        },
        data: [
          200.0, 130.9, 80.0, 20.2, 250.6, 760.7, 135.6, 162.2, 62.6, 200.0,
          6.4, 3.3,
        ],
      },
      {
        name: "Precipitation",
        type: "bar",
        color: "#5470c6",
        tooltip: {
          valueFormatter: function (value) {
            return value + " ml";
          },
        },
        data: [
          130.6, 59.9, 200.0, 106.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
          2.3,
        ],
      },
      {
        name: "Temperature",

        type: "line",
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + " °C";
          },
        },
        data: [
          2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
        ],
      },
    ],
  };

  return (
    <div
      id="main"
      className=" rounded-sm border border-stroke bg-white h-1/2  px-5 pb-5 pt-7.5 shadow-default sm:px-7.5 xl:col-span-5  lg:w-full sm:w-full md:w-full  shadow-md "
    >
      <Title className="mb-2 p-4">My admin dashboard</Title>
      <ReactEcharts option={option} />
    </div>
  );
};

export default Third;
