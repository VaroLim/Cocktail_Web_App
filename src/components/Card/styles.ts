import { FaHeart } from 'react-icons/fa'
import styled from 'styled-components'

export const CardContainer = styled.div`
  height: auto;
  width: 12rem;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #f5ff39;
  text-shadow: 0px 0px 15px #ff5c0f;
  font-weight: bold;
  border: 5px double rgba(255, 0, 0, 0.99);
  background-color: rgba(205, 2, 22, 0.1);
  box-shadow: 0px 0px 20px rgba(255, 55, 255, 255);
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`

export const HeartIcon = styled(FaHeart)`
  color: red;
  font-size: 1.5rem;
  cursor: pointer;
`

export const ContentButton = styled.div``
export const Title = styled.div`
  padding-bottom: 16px;
`
