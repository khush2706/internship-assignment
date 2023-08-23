import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const BarChart = ({ chartData }) => {
  const chartOptions = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'white',
        titleFont: {
          size: '18px',
          family: 'Roboto'
        },
        titleColor: 'black',
        bodyColor: 'gray',
        bodyFont: {
          size: '14px',
          family: 'Roboto'
        },
        padding: 14,
        borderColor: 'gray',
        borderWidth: 0.2,
        shadow: 'red',
        displayColors: false,
        xAlign: 'center',
        yAlign: 'bottom'
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        ticks: {
          display: false
        },
        border: { display: false }
      }
    }
  }
  return (
    <>
      <Bar data={chartData} options={chartOptions} />
    </>
  )
}

export default BarChart
