import {apiCocktails, cocktailsResponse, normalizeApiCocktail } from "../../models/Cocktail"
import { setCachedCocktails } from "../storage/Cocktails"


export const getCocktails = async (): Promise<apiCocktails[]> => {
  const savedCocktails = getCocktails()



  if (!savedCocktails || (await savedCocktails).length <= 0) {
    
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute`

    )

    const data: cocktailsResponse = await response.json()

    const mappedCocktails = data.Cocktails.map(normalizeApiCocktail)
    setCachedCocktails(mappedCocktails)

    mappedCocktails
  }

    return savedCocktails

}











function setApiCocktail(mappedCocktail: { name: string; image: string; id: "number" }[]) {
  throw new Error("Function not implemented.")
}
// www.thecocktaildb.com/api/json/v1/1/random.php
// www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic