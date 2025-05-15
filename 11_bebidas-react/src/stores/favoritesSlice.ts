import type { StateCreator } from 'zustand'
import type { Recipe } from '../types'
import { createNotificationSlice, type NotificationSliceType } from './notificationSlice'
import type { RecipesSliceType } from './recipeSlice'

export type FavoritesSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExist: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType & NotificationSliceType & RecipesSliceType, [],[], FavoritesSliceType> = (set, get, api) => ({
    favorites:[],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExist(recipe.idDrink)) {
            set((state: { favorites: Recipe[] }) => ({
                favorites: state.favorites.filter((favorite: Recipe) => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set, get, api).showNotification({text:'Se eliminó de favoritos', error: true})
        } else {
            set((state: { favorites: Recipe[] }) => ({
                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice(set, get, api).showNotification({text:'Se agregó a favoritos', error: false})
        }
        get().closeModal()
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },

    favoriteExist: (id) => {
        return get().favorites.some((favorite: Recipe) => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})