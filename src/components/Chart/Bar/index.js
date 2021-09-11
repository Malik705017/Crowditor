import React from 'react';
import Chart from "react-apexcharts";

import { series } from "../../../resources/data/Bar";

export default function Bar () {
  
  const options= {
    chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
          'United States', 'China', 'Germany'
        ],
      }
    };
  
  
  
  return (
    <Chart options={options} series={series} type="bar" />
  )
}