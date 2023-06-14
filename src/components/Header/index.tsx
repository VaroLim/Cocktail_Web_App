import { FC, memo } from "react"
// import {logoCocktail} from "../../../public/logoCocktail.png"
import {HeaderContainer,HeaderTitle,HeaderContent} from "./styles"

const Header: FC = () => {
  return (
  // <img src={logoCocktail} />

  <HeaderContainer>

    <HeaderContent>
      <HeaderTitle>
        <h2>
        La Cocktelería
        </h2>
      </HeaderTitle>
    </HeaderContent>

  </HeaderContainer>
)
}

export default memo(Header)