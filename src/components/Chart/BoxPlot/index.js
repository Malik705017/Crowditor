import React from 'react';
import Chart from "react-apexcharts";

import { colors } from "../../../resources/data/Color";

export default function BoxPlot ({data}) {
  const options = {
    chart: {
      type: 'boxPlot',
      height: 500
    },
    xaxis: {
      categories:  data.xaxis.categories,
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: colors.color3,
          lower: colors.color1
        }
      }
    }
  };

  return (
    
    <Chart options={options} series={data.series} type="boxPlot" height="100%" width="100%"/>
    
  )
}