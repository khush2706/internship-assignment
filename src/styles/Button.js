import styled from 'styled-components'
import { devices } from '../constants'

export const Button = styled.button`
  outline: none;
  border: none;
  padding: 10px;
  border-radius: 5px;
  background-color: #dddddd;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: gray;
  }

  @media ${devices.mobileL} {
    margin-top: 30px;
  }
`
