import {Category, Cocktail} from "../../models/Category"


export const COCKTAILS_CATEGOIRES_KEY = 'categoriesCocktails'
export const COCKTAIL_KEY = 'cocktails'
export const FAV_COCKTAILS_KEY = 'favCocktails'


export const getCachedCocktailsCategories = (): Category[] => {

  const response = window.localStorage.getItem(COCKTAILS_CATEGOIRES_KEY)
  return response ? JSON.parse(response) : []
}

export const setCachedCocktailsCategories = (Cocktails: Category[]) => {
  window.localStorage.setItem(COCKTAILS_CATEGOIRES_KEY, JSON.stringify(Cocktails))
}


export const getCachedCocktailsByCategory = (categoryName: string): Cocktail[] => {
  const key = `${COCKTAIL_KEY}_${categoryName}`
  const response = window.localStorage.getItem(key)
  return response ? JSON.parse(response) : []
}


export const setCachedCocktailsByCategory = (cocktails: Cocktail[], categoryName: string) => {
  const key = `${COCKTAIL_KEY}_${categoryName}`
  window.localStorage.setItem(key, JSON.stringify(cocktails))
}