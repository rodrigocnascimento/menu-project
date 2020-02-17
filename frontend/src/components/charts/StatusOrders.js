import React from 'react'
import Chart from 'react-apexcharts'

function StatusOrder({ data }) {
    const labels = [...new Set(data.map(order => order.status))]
    const dataSeries = {}
    data.forEach(function (item) {
        dataSeries[item.status] ? dataSeries[item.status]++ : dataSeries[item.status] = 1
    })

    const chartData = {
        series: Object.values(dataSeries),
        options: {
            labels,
            chart: {
                width: 380,
                type: 'pie',
            },
            title: {
                text: 'Status dos pedidos',
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
        <Chart options={chartData.options} series={chartData.series} type="pie" width={500} height={320} />
    )
}

export default StatusOrder
