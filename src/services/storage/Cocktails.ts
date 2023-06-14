import {Category} from "../../models/Category"

export const COCKTAIL_ID = 'categoriesCocktails'
export const FAV_COCKTAILS = 'favCocktails'


export const getCachedCocktailsCategories = (): Category[] => {
  const response = window.localStorage.getItem(COCKTAIL_ID)
  return response ? JSON.parse(response) : []
}

export const setCachedCocktailsCategories = (Cocktails: Category[]) => {
  window.localStorage.setItem(COCKTAIL_ID, JSON.stringify(Cocktails))
}
