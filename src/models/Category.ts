export type CocktailsCategoriesResponse = {
  Drinks: CocktailsCategoryDrinks[]
}


type CocktailsCategoryDrinks = {
  strCategory: string
}

export const normalizeCategory = (input:CocktailsCategoryDrinks) => ({
  category: input?.strCategory || "",
})

export type Category = ReturnType<typeof normalizeCategory>