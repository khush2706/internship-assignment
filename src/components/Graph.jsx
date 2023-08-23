import { WrapperLg } from '../styles/Containers'
import usersIcon from '../assets/users.svg'
import BarChart from './BarChart'
import { useState, useEffect } from 'react'
import barData from '../data/barData.json'

const Graph = ({ activeTab }) => {
  const [chartData, setChartData] = useState({
    labels: barData[activeTab.value].map((data) => data.timeStamp),
    datasets: [
      {
        label: 'Signups',
        data: barData[activeTab.value].map((data) => data.signups),
        backgroundColor: ['#F8DE22'],
        borderRadius: ['10']
      }
    ]
  })

  useEffect(() => {
    setChartData({
      labels: barData[activeTab.value].map((data) => data.timeStamp),
      datasets: [
        {
          label: 'Signups',
          data: barData[activeTab.value].map((data) => data.signups),
          backgroundColor: ['#F8DE22'],
          borderRadius: 10,
          barPercentage: 0.6
        }
      ]
    })
  }, [activeTab])

  return (
    <>
      <WrapperLg>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ marginRight: '8px' }}>100,000</h1>
          <img src={usersIcon} alt="" />
        </div>
        <h2 className="subtitle">Participants</h2>
        <BarChart chartData={chartData} />
      </WrapperLg>
    </>
  )
}

export default Graph
