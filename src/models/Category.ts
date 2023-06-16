export type CocktailsCategoryDrinks = {
  strCategory: string
}

export type cocktailsCategoriesResponse = {
  drinks: CocktailsCategoryDrinks[]
}

export const normalizeCategory = (input: CocktailsCategoryDrinks) => ({
  name: input?.strCategory || '',
  slug: input?.strCategory.replace(/\s+\/\s+/g, '_').split(' ').join('_'),
})

export type Category = ReturnType<typeof normalizeCategory>
