import { ReactNode } from 'react'

export type Props = {
  children?: ReactNode
  onClick?: () => void
  type?: "button" | "submit"
  // variant?: 'primary' | 'secondary' | undefined
}
