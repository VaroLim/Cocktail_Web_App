import { FC, memo, useCallback, } from 'react'
import * as S from './styles'
import { Props } from './types'
import Button from '../Button'
import { addFavCocktail } from '../../services/storage/Cocktails'




export const Card: FC<Props> = ({  categoryName, onClick, categorySlug, isDetail=false }) => {


  
  const handleFav = useCallback(() => {
    console.log("click")
    const cocktail = {
      cocktelName: categoryName,
      cocktelImg: 'imagen',
      cocktelId: 'id'
    }
    addFavCocktail(cocktail)
  }, [categoryName])

  const handleButtonClick = useCallback(() => {
    handleFav()
  }, [handleFav])

  return (
    <S.CardContainer>
      {categoryName}
      <S.CardContent>
        {onClick && (
          <Button onClick={() => onClick && onClick(categorySlug)}>
            button
          </Button>
        )}

        { !categorySlug && (<Button onClick={handleButtonClick} >
            FAV
            </Button>)}
      </S.CardContent>
    </S.CardContainer>
  )
}

export default memo(Card)
