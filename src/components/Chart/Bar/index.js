import React from 'react';
import Chart from "react-apexcharts";

// import { series } from "../../../resources/data/Bar";

export default function Bar ({ data, horizontal = false }) {
  
  const options= {
    chart: {
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: horizontal,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: data.xaxis.categories,
      }
    };
  
  
  
  return (
    <Chart options={options} series={data.series} type="bar" height="100%" width="100%"/>
  )
}