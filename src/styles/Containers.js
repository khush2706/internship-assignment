import styled from 'styled-components'
import { devices } from '../constants'

export const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 50px 100px;

  @media ${devices.laptopL} {
    padding: 50px 30px;
  }

  @media ${devices.mobileL} {
    padding: 50px 20px;
    padding-bottom: 100px;
  }
`

export const WrapperLg = styled.div`
  background-color: white;
  width: 100%;
  min-height: 300px;
  border-radius: 8px;
  box-shadow: 11px 7px 12px -3px rgba(0, 0, 0, 0.1);
  padding: 45px;
  margin-bottom: 80px;

  & h1 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  & .subtitle {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  & h3 {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  @media ${devices.mobileL} {
    padding: 20px;

    & h1 {
      font-size: 20px;
    }

    & .subtitle {
      font-size: 16px;
    }

    & canvas {
      margin-top: 50px;
    }

    & h3 {
      font-size: 17px;
    }
  }
`

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;

  & h1 {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  @media ${devices.mobileL} {
    & h1 {
      font-size: 17px;
      letter-spacing: 0.5px;
    }
  }
`

export const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: ${(props) => (props.width ? props.width : '20%')};
  height: 2.5em;
  background-color: white;
  border-radius: 10px;
  color: gray;
  box-shadow: ${(props) => (props.boxShadow ? '0px 7px 12px -3px rgba(0, 0, 0, 0.1)' : '0')};
  font-weight: 700;

  & button {
    background-color: #f5f5f5;
    width: ${(props) => (props.buttonWidth ? props.buttonWidth : '45px')};
    border-radius: 8px;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
    cursor: pointer;
    border: none;
    outline: none;
  }

  & button:hover,
  button.active {
    background-color: #dddddd;
  }

  @media ${devices.tablet} {
    width: 60%;
    & button {
      width: 70px;
    }
  }
`

export const WrapperSm = styled(WrapperLg)`
  width: 48%;
  min-height: 470px;
  max-height: 470px;
  margin-bottom: 50px;

  &.showAll {
    max-height: fit-content;
  }

  & .content {
    height: 280px;
    overflow: hidden;
    letter-spacing: 1px;
  }
  & .showAll {
    height: fit-content;
  }

  @media ${devices.mobileL} {
    width: 100%;
    & .content {
      letter-spacing: 0.5px;
    }
  }
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.columns ? props.columns : '50% 50%')};
  grid-template-rows: ${(props) => (props.rows ? props.rows : 'repeat(4, 25%)')};
  overflow: hidden;

  & .header {
    font-size: 16px;
    font-weight: 400;
  }

  @media ${devices.mobileL} {
    font-size: 16px !important;
    & .header {
      font-size: 14px;
    }
  }
`

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${(props) => (props.items ? props.items : 'center')};
  justify-content: ${(props) => (props.justify ? props.justify : 'center')};

  @media ${devices.mobileL} {
    flex-direction: column;
    margin-bottom: 0 !important;
  }
`

export const FlexItem = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};

  & .recommendation-text {
    margin-bottom: 40px;
  }

  @media ${devices.mobileL} {
    width: 100%;
    font-size: 14px;

    & .recommendation-text {
      margin-bottom: 20px;
    }
  }
`
