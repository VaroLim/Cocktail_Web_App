import { Cocktail } from "../../models/Cocktail"

export type Props = {
  categoryName:string
  categorySlug?:string
  onClick?: (categoryslug?: string) => void
  variant?: string
  cocktelImg?: string 
  isDetail?: boolean
  cocktail?: Cocktail
  cocktelName?: string;
  handleFav?: ()=> void
  cocktelId?: string;
  
}