import { FlexContainer, WrapperLg, FlexItem } from '../styles/Containers'
import downArrow from '../assets/caret-down-square.svg'
import upArrow from '../assets/caret-up-square.svg'
import bulb from '../assets/bulb.svg'

const Insights = () => {
  const title = 'ZooTools insights'
  const subTitle = 'Making analytics simple and actionable'
  const insightData = [
    {
      src: downArrow,
      mainText: 'Signups are slowing down.',
      subText: '-5% new than last week'
    },
    {
      src: upArrow,
      mainText: '80%',
      subText: 'of your signups were invited by other members'
    },
    {
      src: bulb,
      mainText: '80%',
      subText: 'of your signups were invited by a friend'
    },
    {
      src: bulb,
      mainText: '80%',
      subText: 'of your signups were invited by a friend'
    }
  ]
  return (
    <>
      <WrapperLg>
        <h1>{title}</h1>
        <h2 className="subtitle">{subTitle}</h2>
        <FlexContainer justify="space-between" items="stretch">
          <FlexItem width="40%" style={{ marginTop: '30px' }}>
            <h3>Summary</h3>
            <div style={{ marginTop: '20px' }}>
              {insightData.map((data, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '10px'
                    }}>
                    <img src={data.src} alt="" />
                    <p style={{ minWidth: '70%', marginLeft: '8px' }}>
                      <strong>{data.mainText}</strong> {data.subText}
                    </p>
                  </div>
                )
              })}
            </div>
          </FlexItem>
          <FlexItem width="40%" style={{ marginTop: '30px' }}>
            <h3>Recommendation</h3>
            <div style={{ marginTop: '20px', fontWeight: '500' }}>
              <p className="recommendation-text">
                Make sure to promote and <a href="#">share your form</a>
              </p>
              <p className="recommendation-text">
                Congrats! This is huge. Keep giving rewards for your users
              </p>
            </div>
          </FlexItem>
        </FlexContainer>
      </WrapperLg>
    </>
  )
}

export default Insights
