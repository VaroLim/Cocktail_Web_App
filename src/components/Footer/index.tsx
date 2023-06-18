import { FC, memo } from 'react'
import { FooterContainer, FooterText } from './styles'

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterText>&copy;Cocktel-Freaks 2023</FooterText>
    </FooterContainer>
  )
}

export default memo(Footer)
