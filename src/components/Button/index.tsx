import { FC } from 'react'
import type { Props } from './types'
import "./styles"


export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  )
}

export default Button