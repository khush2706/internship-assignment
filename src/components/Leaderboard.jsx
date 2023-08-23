import { Grid, NavWrapper, WrapperSm } from '../styles/Containers'
import leaderboardData from '../data/leaderboardData.json'
import { Button } from '../styles/Button'
import { textTruncate, addCommas } from '../utils'
import { useState } from 'react'

const LeaderBoard = () => {
  const [showAll, setShowAll] = useState(false)
  return (
    <>
      <WrapperSm className={showAll ? 'showAll' : ''}>
        <NavWrapper style={{ marginBottom: '30px' }}>
          <h1>User leaderboard</h1>
        </NavWrapper>
        <div className={`content ${showAll ? 'showAll' : ''}`}>
          <Grid columns="40% 40% 40%" rows="55px repeat(4, 60px)">
            <h2 className="header">Email</h2>
            <h2 className="header">Friends Invited</h2>
            <h2 className="header">Country</h2>
            {leaderboardData.map((data) => {
              return (
                <>
                  <div>{textTruncate(data.email, 15)}</div>
                  <div>{textTruncate(addCommas(data.invites), 8)}</div>
                  <div>{textTruncate(data.country, 10)}</div>
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
          See leaderboard
        </Button>
      </WrapperSm>
    </>
  )
}

export default LeaderBoard
