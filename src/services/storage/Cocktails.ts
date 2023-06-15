import { Category } from "../../models/Category"


export const COCKTAILS_CATEGOIRES_KEY = 'categoriesCocktails'
export const COCKTAIL_KEY = 'cocktails'
export const FAV_COCKTAILS_KEY = 'favCocktails'

export const getCachedCocktailsCategories = (): Category[] => {

  const response = window.localStorage.getItem(COCKTAIL_ID)
  return response ? JSON.parse(response) : []
}

export const setCachedCocktailsCategories = (Cocktails: Category[]) => {
  window.localStorage.setItem(COCKTAIL_ID, JSON.stringify(Cocktails))
}

export const addFavPhoto = (cocktail: Cocktail) => {
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