import {Category} from "../../models/Category"

export const COCKTAIL_ID = 'cocktailsCategories'
export const FAV_COCKTAILS = 'favCocktails'


export const getCachedCategories = (): Category[] => {
  const response = window.localStorage.getItem(COCKTAIL_ID)
  return response ? JSON.parse(response) : []
}

export const setCachedCategories = (Cocktails: Category[]) => {
  window.localStorage.setItem(COCKTAIL_ID, JSON.stringify(Cocktails))
}

