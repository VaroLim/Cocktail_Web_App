import {
  Category,
  cocktailsCategoriesResponse,
  normalizeCategory,
} from '../../models/Category'
import {
  getCachedCocktailsCategories,  
  setCachedCocktailsCategories,
} from '../storage/Cocktails'

export const getCocktailsCategories = async (): Promise<Category[]> => {
  const savedCategories = getCachedCocktailsCategories()

  if (!savedCategories || savedCategories.length <= 0) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
    )

    const data: cocktailsCategoriesResponse = await response.json()
    const mappedCategories = data.drinks.map(normalizeCategory)
    setCachedCocktailsCategories(mappedCategories)
    return mappedCategories
  }

  return savedCategories
}
