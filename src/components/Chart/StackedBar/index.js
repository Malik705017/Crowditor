import React from 'react';
import Chart from "react-apexcharts";

import { colors } from "../../../resources/data/Color";

export default function StackedBar ({ data, full = false, horizontal = false }) {
  
  const options= {
    colors: [colors.color1, colors.color3, colors.color2, colors.color4,colors.color5],
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
      xaxis: {
        categories: data.xaxis.categories,
      },
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
    <Chart options={options} series={data.series} type="bar" height="90%" width="100%"/>
  )
}