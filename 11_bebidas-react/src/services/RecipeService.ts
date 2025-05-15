import axios from "axios";
import { CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../schemas/recipes-schema";
import type { Drink, SearchFilter } from "../types";

export async function getCategories() {
    try {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
        const { data } = await axios.get(url)
        const result = CategoriesAPIResponseSchema.safeParse(data)

        if (!result.success) {
            throw new Error(`Validation failed: ${result.error}`)
        }

        return result.data.drinks
    } catch (error) {
        console.error('Error fetching categories:', error)
        throw error
    }
}


export async function getRecipes(filters: SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const {data} = await axios(url)
    console.log(data);
    const result = DrinksAPIResponse.safeParse(data)
    console.log(result);

    if(result.success){
        return result.data
    }
}

export async function getRecipeById(id: Drink['idDrink']) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const {data} = await axios(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    console.log(result);
    
    if(result.success){
        return result.data
    }
}