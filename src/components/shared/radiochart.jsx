import { DonutChart, Legend } from '@tremor/react';


import ReactEcharts from "echarts-for-react";

function DonutChartUsage() {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '1%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'medium'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Desktop' },
          { value: 735, name: 'Tablet' },
          { value: 580, name: 'Mobile' },
          { value: 484, name: 'Unknown' },
         
        ]
      }
    ]
  };
  return (
    <>
      <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5 h-70">
      <h3 className=''>Visitors Analytics</h3>
      <div className='p-1'>
      <ReactEcharts option={option} />
      </div>
     
      </div>
      <div></div>
    </>
  );
}
export  default   DonutChartUsage