
export type CocktailsCategoryDrinks = {
  strCategory: string
}

export type cocktailsCategoriesResponse = {
  drinks: CocktailsCategoryDrinks[]
}

export const normalizeCategory = (input: CocktailsCategoryDrinks) => ({
  name: input?.strCategory || '',
  slug: input?.strCategory.split(' ').join('_')
})

// <------------>



export type cocktailsListDrinks ={
  strDrink: string
  strDrinkThumb: string
  idDrink: string
}

export type cocktailsListResponse = {
drinks:cocktailsListDrinks[]
}

export const normalizeCocktail = (input: cocktailsListDrinks) => ({
  cocktelName: input?.strDrink || '',
  cocktelImg: input?.strDrinkThumb || '',
  cocktelId: input?.idDrink || '',
})




export type Cocktail = ReturnType<typeof normalizeCocktail>
export type Category = ReturnType<typeof normalizeCategory>
