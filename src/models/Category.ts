
export type CocktailsCategoryDrinks = {
  strCategory: string
}

export type cocktailsCategoriesResponse = {
  drinks: CocktailsCategoryDrinks[]
}


export const normalizeCategory = (input: CocktailsCategoryDrinks) => ({
  cocktelCategory: input?.strCategory || '',
})

export type Category = ReturnType<typeof normalizeCategory>
