export const series = [
    {
      name: 'box',
      type: 'boxPlot',
      data: [
        {
          x: new Date('2017-01-01').getTime(),
          y: [54, 66, 69, 75, 88]
        },
        
      ]
    },
    {
      name: 'outliers',
      type: 'scatter',
      data: [
        {
          x: new Date('2017-01-01').getTime(),
          y: 32
        },
        
      ]
    }
  ];