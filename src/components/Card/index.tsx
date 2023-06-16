import { FC, memo, useCallback, useState } from 'react'
import * as S from './styles'
import { Props } from './types'
import Button from '../Button'
import { addFavCocktail } from '../../services/storage/Cocktails'
import { useNavigate } from 'react-router-dom'



export const Card: FC<Props> = ({
  categoryName,
  cocktelId,
  cocktelImg,
  onClick,
  categorySlug,
  isDetail = false,
}) => {
  const [isFav, setIsFav] = useState(false)
  const handleFav = useCallback(() => {
    console.log('click')
    const cocktail = {
      cocktelName: categoryName,
      cocktelImg: 'Img',
      cocktelId: 'id',
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
  
  return (
    <S.CardContainer>
      <S.Title>{categoryName}</S.Title>
      
      {isFav &&(<div><S.HeartIcon  /></div>)}
      <S.CardContent>
        {onClick && (
          <Button onClick={() => onClick && onClick(categorySlug)}>
            Lista Cóckteles
          </Button> )}
          <S.Img src={cocktelImg}  />
        <S.ContentButton>        {!categorySlug && <Button onClick={handleButtonClick}>FAV</Button>}
        {!categorySlug && <Button onClick={handleGoToDetail}>detail</Button>} 
        </S.ContentButton>

        
      </S.CardContent>
    </S.CardContainer>
  )
}

export default memo(Card)
