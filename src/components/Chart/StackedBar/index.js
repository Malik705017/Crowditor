import React from 'react';
import Chart from "react-apexcharts";

export default function StackedBar ({ data, full = false, horizontal = false }) {
  
  const options= {
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: full ? '100%' : ''
      },
      plotOptions: {
        bar: {
          horizontal: horizontal,
        },
      },
      stroke: {
        show: false,
      },
      xaxis: data.xaxis,
      fill: {
        opacity: 1
      },
      legend: {
        inverseOrder: horizontal ? false : true,
        position: horizontal ? 'top' : 'right',
        horizontalAlign: horizontal ? 'left' : '',
      },
      dataLabels: {
        formatter: function(value) {
          if(value >= 5)
          {return Math.round(value) + '%'}
        }
      }
    };
  
  
  
  return (
    <Chart options={options} series={data.series} type="bar"  height="100%" width="100%"/>
  )
}