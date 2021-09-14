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
        xaxis: {
          type: 'datetime',
          tooltip: {
            formatter: function(val) {
              return new Date(val).getFullYear()
            }
          }
        },
      };
  return (
    
    <Chart options={options} series={series} type="boxPlot" height="100%" width="100%"/>
    
  )
}