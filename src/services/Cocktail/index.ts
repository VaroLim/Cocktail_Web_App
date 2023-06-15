import {
  Category,
  cocktailsCategoriesResponse,
  cocktailsListResponse,
  normalizeCategory,
  normalizeCocktail,
} from '../../models/Category'
import {
  getCachedCocktailsCategories,  
  setCachedCocktailsCategories,
  getCachedCocktailsByCategory,
  setCachedCocktailsByCategory
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


export const getCocktailsByCategory = async (categoryName: string) => {
  const savedList = getCachedCocktailsByCategory(categoryName)

  if (!savedList || savedList.length <=0 ) {
    const response = await fetch (
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`      
    )
      const data: cocktailsListResponse = await response.json()
      const mappedList = data.drinks.map(normalizeCocktail)
      setCachedCocktailsByCategory(mappedList,categoryName )
      return mappedList

  }
  return savedList
  
}