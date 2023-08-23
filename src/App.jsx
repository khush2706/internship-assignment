import Behaviour from './components/Behaviour'
import Graph from './components/Graph'
import Insights from './components/Insights'
import LeaderBoard from './components/Leaderboard'
import Location from './components/Location'
import Navbar from './components/Navbar'
import Traffic from './components/Traffic'
import { AppWrapper, FlexContainer } from './styles/Containers'
import { GlobalStyles } from './styles/GlobalStyles'
import { useState } from 'react'

function App() {
  const Tabs = [
    {
      name: '1h',
      id: 0,
      value: 'hourData'
    },
    {
      name: '24h',
      id: 1,
      value: 'dayData'
    },
    {
      name: '30d',
      id: 2,
      value: 'monthlyData'
    },
    {
      name: '60d',
      id: 3,
      value: 'biMonthlyData'
    }
  ]

  const [activeTab, setActiveTab] = useState(Tabs[0])

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        {activeTab && (
          <>
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} Tabs={Tabs} />
            <Graph activeTab={activeTab} />
            <Insights />
            <FlexContainer
              items="flex-start"
              justify="space-between"
              style={{ marginBottom: '50px' }}>
              <LeaderBoard />
              <Traffic />
            </FlexContainer>
            <FlexContainer items="flex-start" justify="space-between">
              <Location />
              <Behaviour />
            </FlexContainer>
          </>
        )}
      </AppWrapper>
    </>
  )
}

export default App
