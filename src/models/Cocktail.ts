export type cocktailsListDrinks = {
  strDrink: string
  strDrinkThumb: string
  idDrink: string
}

export type cocktailsListResponse = {
  drinks: cocktailsListDrinks[]
}

export const normalizeCocktail = (input: cocktailsListDrinks) => ({
  cocktelName: input?.strDrink || '',
  cocktelImg: input?.strDrinkThumb || '',
  cocktelId: input?.idDrink || '',
})

export type Cocktail = ReturnType<typeof normalizeCocktail>
