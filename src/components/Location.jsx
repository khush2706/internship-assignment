import { useState, useEffect } from 'react'
import { NavWrapper, TabWrapper, WrapperSm, Grid } from '../styles/Containers'
import locationData from '../data/locationData.json'
import { textTruncate, addCommas } from '../utils'
import { Button } from '../styles/Button'

const Location = () => {
  const [showAll, setShowAll] = useState(false)
  const Tabs = [
    {
      name: 'Country',
      value: 'countries',
      id: 0,
      buttonText: 'See all countries'
    },
    {
      name: 'City',
      value: 'cities',
      id: 1,
      buttonText: 'See all cities'
    }
  ]

  const [total, setTotal] = useState({ countries: 100, cities: 100 })

  useEffect(() => {
    let totalCountries = 0
    locationData.countries.forEach((data) => {
      totalCountries += data.number
    })
    let totalCity = 0
    locationData.cities.forEach((data) => {
      totalCity += data.number
    })
    setTotal({
      countries: totalCountries,
      cities: totalCity
    })
  }, [locationData])

  const [activeTab, setActiveTab] = useState(Tabs[0])
  return (
    <>
      <WrapperSm className={showAll ? 'showAll' : ''}>
        <NavWrapper style={{ marginBottom: '20px' }}>
          <h1>Signup location</h1>
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
            {locationData[activeTab?.value].map((data) => {
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
                      <img src={data.src} alt="" /> {textTruncate(data.name, 19)}
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

export default Location
