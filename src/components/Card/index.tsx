import { FC, memo, useCallback, } from 'react'
import * as S from './styles'
import { Props } from './types'
import Button from '../Button'
import { addFavPhoto } from '../../services/storage/Cocktails'


export const Card: FC<Props> = ({ categoryName, onClick, categorySlug, isDetail=false, handleFav }) => {





  return (
    <S.CardContainer>
      {categoryName}
      <S.CardContent>
        {onClick && (
          <Button onClick={() => onClick && onClick(categorySlug)}>
            button
          </Button>
        )}

        { !categorySlug && (<Button onClick={handleFav} >
            FAV
            </Button>)}
      </S.CardContent>
    </S.CardContainer>
  )
}

export default memo(Card)
