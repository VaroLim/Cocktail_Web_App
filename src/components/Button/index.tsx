import { FC, memo } from 'react'
import type { Props } from './types'
import {Container} from "./styles"


const Button: FC<Props> = ({  onClick, children }) => {
  return (
    <Container onClick={onClick}>
    {children}
    </Container>
  )
}

export default memo(Button)