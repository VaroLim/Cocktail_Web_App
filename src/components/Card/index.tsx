import { FC, memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addFavCocktail } from '../../services/storage/Cocktails'
import Button from '../Button'
import type { Props } from './types'
import * as S from './styles'

export const Card: FC<Props> = ({
  categoryName,
  cocktelImg,
  onClick,
  categorySlug,
  cocktelId,
}) => {
  const [isFav, setIsFav] = useState(false)

  const handleFav = useCallback(() => {
    const cocktail = {
      cocktelName: categoryName,
      cocktelImg: `${cocktelImg}`,
      cocktelId: `${cocktelId}`,
    }
    setIsFav(!isFav)
    addFavCocktail(cocktail)
  }, [categoryName, isFav, cocktelImg, cocktelId])

  const handleButtonClick = useCallback(() => {
    handleFav()
  }, [handleFav])

  const navigate = useNavigate()

  const handleGoToDetail = useCallback(() => {
    navigate(
      `/details/${encodeURIComponent(categoryName)}/${encodeURIComponent(
        cocktelImg ?? ''
      )} `
    )
  }, [categoryName, navigate, cocktelImg])

  return (
    <S.CardContainer>
      <S.Title>{categoryName}</S.Title>

      {isFav && (
        <div>
          <S.HeartIcon />
        </div>
      )}
      <S.CardContent>
        {onClick && (
          <Button onClick={() => onClick && onClick(categorySlug)}>
            Lista Cóckteles
          </Button>
        )}
        <S.Img src={cocktelImg} />
        <S.ContentButton>
          {!categorySlug && <Button onClick={handleButtonClick}>FAV</Button>}
          {!categorySlug && <Button onClick={handleGoToDetail}>detail</Button>}
        </S.ContentButton>
      </S.CardContent>
    </S.CardContainer>
  )
}

export default memo(Card)
