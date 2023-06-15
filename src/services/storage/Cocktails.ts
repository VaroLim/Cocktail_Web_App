import { Category } from '../../models/Category'

import { Cocktail } from '../../models/Cocktail'
import Cocktails from '../../views/Cocktails'

export const COCKTAILS_CATEGOIRES_KEY = 'categoriesCocktails'
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

export const getCachedCocktailsByCategory = (categoryName: string): Cocktail[] => {
  const key = `${COCKTAIL_KEY}_${categoryName}`
  const response = window.localStorage.getItem(key)
  return response ? JSON.parse(response) : []
}

export const setCachedCocktailsByCategory = (cocktails: Cocktail[],categoryName: string) => {
  const key = `${COCKTAIL_KEY}_${categoryName}`
  window.localStorage.setItem(key, JSON.stringify(cocktails))
}




export const getFavCocktail = (categoryName: string): Cocktail[] => {
  const key = `${FAV_COCKTAILS_KEY}_${categoryName}`;
  const response = window.localStorage.getItem(key);
  return response ? JSON.parse(response) : [];
};

export const setFavCocktail = (cocktail: Cocktail[], categoryName: string) => {
  const key = `${FAV_COCKTAILS_KEY}_${categoryName}`;
  window.localStorage.setItem(key, JSON.stringify(cocktail));
};

export const addFavPhoto = (cocktail: Cocktail) => {
  const currentFavCocktail = getFavCocktail(cocktail.cocktelName); // Pasar categoryName como argumento
  const existingIndex = currentFavCocktail.findIndex(
    (item) => item.cocktelName === cocktail.cocktelName
  );
  if (existingIndex !== -1) {
    currentFavCocktail.splice(existingIndex, 1);
  } else {
    currentFavCocktail.push(cocktail);
  }
  setFavCocktail(currentFavCocktail, cocktail.cocktelName); // Pasar currentFavCocktail y categoryName como argumentos
};
