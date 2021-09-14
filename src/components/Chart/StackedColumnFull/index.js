import React from 'react';
import Chart from "react-apexcharts";

import { series } from "../../../resources/data/StackedColumnFull";

export default function StackedColumnFull () {
  
  const options= {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      stackType: '100%'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    xaxis: {
      categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2',
        '2012 Q3', '2012 Q4'
      ],
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'right',
      offsetX: 0,
      offsetY: 50
    },
  };
  
  
  
  return (
    <Chart options={options} series={series} type="bar" />
  )
}