import { FC, memo } from 'react'
import { HeaderContainer, HeaderTitle, HeaderContent } from './styles'
import { useNavigate } from 'react-router'

const Header: FC = () => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle onClick={() => navigate('/')}>
          La Cocktelería
        </HeaderTitle>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default memo(Header)
