import { Category, CocktailsCategoriesResponse, normalizeCategory } from "../../models/Category"

export const getCocktailsCategories = async (): Promise<Category[]> => { 
  const response = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
  
  const data: CocktailsCategoriesResponse =  await response.json()
  console.log({data})
  
  return data.Drinks.map(normalizeCategory)
}
