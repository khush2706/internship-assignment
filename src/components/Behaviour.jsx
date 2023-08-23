import { useState, useEffect } from 'react'
import { NavWrapper, TabWrapper, WrapperSm, Grid } from '../styles/Containers'
import behaviourData from '../data/behaviourData.json'
import { textTruncate, addCommas } from '../utils'
import { Button } from '../styles/Button'

const Behaviour = () => {
  const [showAll, setShowAll] = useState(false)
  const Tabs = [
    {
      name: 'Browsers',
      value: 'browsers',
      id: 0,
      buttonText: 'See all countries'
    },
    {
      name: 'Decides',
      value: 'decides',
      id: 1,
      buttonText: 'See all cities'
    }
  ]

  const [total, setTotal] = useState({ browsers: 100, decides: 100 })

  useEffect(() => {
    let totalCountries = 0
    behaviourData.browsers.forEach((data) => {
      totalCountries += data.number
    })
    let totalCity = 0
    behaviourData.decides.forEach((data) => {
      totalCity += data.number
    })
    setTotal({
      browsers: totalCountries,
      decides: totalCity
    })
  }, [behaviourData])

  const [activeTab, setActiveTab] = useState(Tabs[0])
  return (
    <>
      <WrapperSm className={showAll ? 'showAll' : ''}>
        <NavWrapper style={{ marginBottom: '20px' }}>
          <h1>Behaviour</h1>
          <TabWrapper width="40%" buttonWidth="80px">
            {activeTab &&
              Tabs.map((tab, index) => {
                return (
                  <button
                    className={tab?.id === activeTab?.id ? 'active' : ''}
                    key={index}
                    onClick={() => setActiveTab(tab)}>
                    {tab?.name}
                  </button>
                )
              })}
          </TabWrapper>
        </NavWrapper>
        <div className={`content ${showAll ? 'showAll' : ''}`}>
          <Grid rows="55px repeat(4, 60px)" style={{ fontSize: '18px' }}>
            {behaviourData[activeTab?.value].map((data) => {
              return (
                <>
                  <div>
                    <div
                      style={{
                        background: `linear-gradient(to right, rgb(248, 222, 34, 51%) 0px, rgb(248, 222, 34, 51%) ${
                          (data.number / total[activeTab.value]) * 100
                        }%,#fff ${(data.number / total[activeTab.value]) * 100}%,#fff 100%)`,
                        height: '50%',
                        borderRadius: '10px',
                        padding: '5px'
                      }}>
                      {textTruncate(data.name, 19)}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    {textTruncate(addCommas(data?.number), 8)}
                  </div>
                </>
              )
            })}
          </Grid>
        </div>
        <Button
          onClick={() =>
            setShowAll((prevValue) => {
              return !prevValue
            })
          }>
          {activeTab?.buttonText}
        </Button>
      </WrapperSm>
    </>
  )
}

export default Behaviour
