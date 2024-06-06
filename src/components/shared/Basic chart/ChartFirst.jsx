import React from 'react'
import ReactEcharts from "echarts-for-react";
import {  Title } from '@tremor/react'
const ChartFirst = () => {
    let base = +new Date(1988, 9, 3);
let oneDay = 24 * 3600 * 1000;
let data = [[base, Math.random() * 300]];
for (let i = 1; i < 20000; i++) {
  let now = new Date((base += oneDay));
  data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
}
 const option = {
    
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };
  return (
    <div className=" rounded-sm border border-stroke bg-white h-1/2  px-5 pb-5 pt-7.5 shadow-default sm:px-7.5 xl:col-span-5  lg:w-full sm:w-full md:w-full  shadow-md ">
  <Title className='mb-2 p-4'>My admin dashboard</Title>
      <ReactEcharts option={option} />
     
    </div>
  )
}

export default ChartFirst
