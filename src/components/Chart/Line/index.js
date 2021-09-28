import React from 'react';
import Chart from "react-apexcharts";

import { colors } from "../../../resources/data/Color";

export default function Line ({ data }) {
  const options= {
    colors: [colors.color3],
    chart: {
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: data.xaxis.categories,
      },
      yaxis: data.yaxis,
    };
  
  return (
    <Chart options={options} series={data.series} type="line" height="90%" width="100%"/>
  )
}