
import { AreaChart, BarChart, Card, Title } from '@tremor/react'
import ReactEcharts from "echarts-for-react";





export default function Bar() {

  const option = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
     
    ]
  };;
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5  lg:w-full sm:w-full md:w-full  shadow-md ">
      <Title className='mb-2 p-4'>My admin dashboard</Title>
      <ReactEcharts option={option} />
     
    </div>
  )
}