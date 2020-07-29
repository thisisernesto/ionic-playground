import { Injectable } from '@angular/core';
import { Recipe } from './recipe-model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Pasta',
      imgUrl: 'https://static.wixstatic.com/media/080aac_f21d6e1f3c3b436587a8b73b21bd22c5~mv2.jpg/v1/fill/w_809,h_471,al_c,q_90/080aac_f21d6e1f3c3b436587a8b73b21bd22c5~mv2.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Tacos',
      imgUrl: 'https://portal-amb-imgs.clubedaana.com.br/2018/11/tacos-mexicanos-600x400.jpg',
      ingredients: ['Fried Dough', 'Grinded Meat', 'Spices']
    },
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes]
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId
    })}
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipe.id
    })
  }
}
