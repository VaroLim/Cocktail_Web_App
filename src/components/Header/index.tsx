import { FC, memo, useCallback } from 'react'
import { HeaderContainer, HeaderTitle, HeaderContent } from './styles'
import { useNavigate } from 'react-router'
import Button from '../Button'
import { Cocktail, cocktailsListResponse, normalizeCocktail } from '../../models/Cocktail'
import { getCachedCocktailsCategories, setCachedCocktailsByCategory } from '../../services/storage/Cocktails'
import Cocktails from '../../views/Cocktails'


const Header: FC = () => {
  const navigate = useNavigate()



  const handleClick = useCallback(async () => {
    try {
      await getCachedCocktailsCategories
      console.log('Sincronizado')
    } catch (error) {
      console.error('Error al sincronizar', error)
    }
  }, [])



  return (
    <HeaderContainer>
      
      <HeaderContent>
      <Button onClick={handleClick}>SYNC</Button>
        <HeaderTitle onClick={() => navigate('/')}>
          Cocktel-Freaks
        </HeaderTitle>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default memo(Header)
