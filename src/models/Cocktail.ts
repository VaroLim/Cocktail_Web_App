export type apiCocktails = {
  "strDrink": string,
  "strDrinkThumb": string,
  "idDrink": "number",
}

export type cocktailsResponse = {
  Cocktails: apiCocktails[]
}


export const normalizeApiCocktail = (input: apiCocktails) => ({
  name: input?.strDrink || "",
  image: input?.strDrinkThumb || "",
  id: input?.idDrink || "",
  isFav: false
})



export type Cocktail = ReturnType<typeof normalizeApiCocktail>
