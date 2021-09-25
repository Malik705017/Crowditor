import React from 'react';
import Chart from "react-apexcharts";

//import { colors } from "../../../resources/data/Color";

export default function BoxPlot ({data}) {
  const options = {
    chart: {
      type: 'boxPlot',
      height: 500
    },
    colors: ['#008FFB', '#FEB019'],
    xaxis: {
      categories:  data.xaxis.categories,
    },
    // yaxis: data.yaxis,
  };

  return (
    
    <Chart options={options} series={data.series} type="boxPlot" height="100%" width="100%"/>
    
  )
}