import {Cocktail} from "../../models/Cocktail"

export const COCKTAIL_ID = 'apiCocktails'
export const FAV_COCKTAILS = 'favCocktails'


export const getCachedCocktails = (): Cocktail[] => {
  const response = window.localStorage.getItem(COCKTAIL_ID)
  return response ? JSON.parse(response) : []
}

export const setCachedCocktails = (Cocktails: Cocktail[]) => {
  window.localStorage.setItem(COCKTAIL_ID, JSON.stringify(Cocktails))
}

export const addNasaPhotoToCached = (cocktail: Cocktail) => {
  const cachedPhotos = getCachedCocktails()
  setCachedCocktails([cocktail, ...cachedPhotos])
}