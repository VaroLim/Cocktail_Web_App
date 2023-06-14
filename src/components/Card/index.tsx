import { FC, memo } from 'react'
import * as S from './styles'
import { Props } from './types'


export const Card: FC <Props> = ({cocktelCategory} ) => {
  return (
    <S.CardContainer>
      {cocktelCategory} 
      <S.CardContent>
      
      IMAGEN
      </S.CardContent>
    </S.CardContainer>
  )
}

export default memo(Card)