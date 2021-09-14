import React from 'react';
import Chart from "react-apexcharts";

import { series } from "../../../resources/data/BoxPlot";


export default function BoxPlot () {
  
    const options = {
        chart: {
          type: 'boxPlot',
          height: 500
        },
        colors: ['#008FFB', '#FEB019'],
        title: {
          text: 'BoxPlot',
          align: 'left'
        },
        xaxis: {
          type: 'datetime',
          tooltip: {
            formatter: function(val) {
              return new Date(val).getFullYear()
            }
          }
        },
        tooltip: {
          shared: false,
          intersect: true
        }
      };
  return (
    
    <Chart options={options} series={series} type="boxPlot" />
    
  )
}