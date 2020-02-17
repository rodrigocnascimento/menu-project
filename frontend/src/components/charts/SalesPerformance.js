import React from 'react';
import Chart from 'react-apexcharts'

function SalesPerformanceChart({ data }) {
  const labels = [...new Set(data.map(order => order.category))]
  const dataSeries = {}
  data.forEach(function (item) {
      dataSeries[item.category] ? dataSeries[item.category]++ : dataSeries[item.category] = 1
  })

  const chartData = {
      series: Object.values(dataSeries),
      options: {
          labels,
          chart: {
              width: 380,
              type: 'donut',
          },
          title: {
              text: 'Performance de vendas',
              align: 'left'
          },
          responsive: [{
              breakpoint: 480,
              options: {
                  chart: {
                      width: 200
                  },
                  legend: {
                      position: 'bottom'
                  }
              }
          }]
      },
  }

  return (
      <Chart options={chartData.options} series={chartData.series} type="donut" width={500} height={320} />
  )
}

export default SalesPerformanceChart;
