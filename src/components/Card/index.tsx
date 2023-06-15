import { FC, memo } from 'react'
import * as S from './styles'
import { Props } from './types'
import Button from '../Button'


export const Card: FC <Props> = ({categoryName, onClick, categorySlug} ) => {
  return (
    <S.CardContainer>
      {categoryName} 
      <S.CardContent>
      {onClick && <Button onClick={() => onClick && onClick(categorySlug)}>button</Button> }
      </S.CardContent>
    </S.CardContainer>
  )
}

export default memo(Card)