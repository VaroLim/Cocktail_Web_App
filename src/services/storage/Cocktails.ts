import { Category } from '../../models/Category'
import { Cocktail } from '../../models/Cocktail'

export const COCKTAILS_CATEGOIRES_KEY='categoriesCocktails'
export const COCKTAIL_KEY = 'cocktails'
export const FAV_COCKTAILS_KEY = 'favCocktails'

export const getCachedCocktailsCategories = (): Category[] => {
  const response = window.localStorage.getItem(COCKTAILS_CATEGOIRES_KEY)
  return response ? JSON.parse(response) : []
}

export const setCachedCocktailsCategories = (Cocktails: Category[]) => {
  window.localStorage.setItem(
    COCKTAILS_CATEGOIRES_KEY,
    JSON.stringify(Cocktails)
  )
}

export const getCachedCocktailsByCategory = (
  categoryName: string
): Cocktail[] => {
  const key = `${COCKTAIL_KEY}_${categoryName}`
  const response = window.localStorage.getItem(key)
  return response ? JSON.parse(response) : []
}

export const setCachedCocktailsByCategory = (
  cocktails: Cocktail[],
  categoryName: string
) => {
  const key = `${COCKTAIL_KEY}_${categoryName}`
  window.localStorage.setItem(key, JSON.stringify(cocktails))
}




export const getFavCocktail = (): Cocktail[] => {
  const response = window.localStorage.getItem(FAV_COCKTAILS_KEY);
  return response ? JSON.parse(response) : [];
}

export const setFavCocktail = (cocktail: Cocktail[]) => {
  window.localStorage.setItem(FAV_COCKTAILS_KEY ,JSON.stringify(cocktail))
}


export const addFavCocktail = (cocktail: Cocktail) => {
  const currentFavCocktail = getFavCocktail()
  const existingIndex = currentFavCocktail.findIndex(
    (item) => item.cocktelName === cocktail.cocktelName
  )
  if (existingIndex !== -1) {
    currentFavCocktail.splice(existingIndex, 1)
  } else {
    currentFavCocktail.push(cocktail)
  }
  setFavCocktail(currentFavCocktail)
}