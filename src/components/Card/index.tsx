import { FC, memo, useCallback, useState } from 'react'
import * as S from './styles'
import { Props } from './types'
import Button from '../Button'
import { addFavCocktail, 
  // removeCocktail 
} from '../../services/storage/Cocktails'
import { useNavigate } from 'react-router-dom'
import { Cocktail } from '../../models/Cocktail'

export const Card: FC<Props> = ({
  categoryName,
  cocktelImg,
  onClick,
  categorySlug,
  cocktelId
}) => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([])
  const [isFav, setIsFav] = useState(false)

  const handleFav = useCallback(() => {
    const cocktail = {
      cocktelName: categoryName,
      cocktelImg: `${cocktelImg}`,
      cocktelId: `${cocktelId}`,
    }
    setIsFav(!isFav)
    addFavCocktail(cocktail)
  }, [categoryName, isFav])

  const handleButtonClick = useCallback(() => {
    handleFav()
  }, [handleFav])


  const navigate = useNavigate()  
  const handleGoToDetail = useCallback(() => {    
    navigate(`/details/${encodeURIComponent(categoryName)}/${encodeURIComponent(cocktelImg ?? '')} `);
  }, [categoryName , navigate]);
  
  // const handleRemove = useCallback((cocktail: Cocktail) => {
  //   const newList = removeCocktail(cocktail)
  //   setCocktails(newList)
  // }, [])
  // const handleButtonRemove = useCallback(() => {
  //   const cocktail = {
  //     cocktelName: categoryName,
  //     cocktelImg: `${cocktelImg}`,
  //     cocktelId: `${cocktelId}`,
  //   }
  //   handleRemove(cocktail)
  // }, [handleRemove])

  return (
    <S.CardContainer>
      <S.Title>{categoryName}</S.Title>

      {/* <Button onClick={handleButtonRemove}>DELETE</Button> */}
      {isFav &&(<div><S.HeartIcon  /></div>)}
      <S.CardContent>
        {onClick && (
          <Button onClick={() => onClick && onClick(categorySlug)}>
            Lista Cóckteles

          </Button> )}
          <S.Img src={cocktelImg}  />
        <S.ContentButton>        
          {!categorySlug && <Button onClick={handleButtonClick}>FAV</Button>}
          {!categorySlug && <Button onClick={handleGoToDetail}>detail</Button>} 

        </S.ContentButton>


      </S.CardContent>
    </S.CardContainer>
  )
}

export default memo(Card)
