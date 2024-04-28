// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 96px;
`
export const Text = styled.p`
  color: #e2e8f0;
  font-size: 16px;
  font-family: 'Roboto';
  margin-top: 25px;
  margin-bottom: 90px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    line-height: 1.5;
    margin-bottom: 68px;
    font-size: 24px;
  }
`

export const Button = styled.button`
  color: #ffffff;
  background-color: #06b6d4;
  font-weight: 500;
  font-size: 16px;
  border: none;
  border-radius: 15px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 768px) {
    margin-top: 68px;
  }
`
