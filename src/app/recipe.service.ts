import { Injectable } from '@angular/core';
import { Recipe } from './tab1/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
 private recipes: Recipe[] = [
    {
    id: 'r020',
    title: 'Tinola',
    imageUrl: 'http://images.summitmedia-digital.com/yummyph/images/2020/06/29/KNR_0035.jpg',
    ingredients: ['Chicken ', 'Ginger ', 'Salt ', 'Onion ', 'Water ','Papaya ']
    },
    {
      id: 'r021',
      title: 'Adobo',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Chicken_adobo.jpg/1200px-Chicken_adobo.jpg',
      ingredients: ['Chicken ', 'Vinegar ', 'Soy Sauce ', 'Garlic', 'Water ','Bayleaf ']
    },
    {
      id: 'r022',
      title: 'Bulalo',
      imageUrl: 'https://images.summitmedia-digital.com/yummyph/images/2021/11/05/porkbulalorecipe2.jpg',
      ingredients: ['Beef ', 'Fish Sauce ', 'Corn ', 'Garlic ', 'Water ','Potato ']
    },
    {
      id: 'r023',
      title: 'Pancit Guisado',
      imageUrl: 'https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/e7b9a5a0-3bd7-4003-a609-4a247b5e115f.jpg',
      ingredients: ['Noodles ', 'Chicken ', 'Soy Sauce ', 'Garlic', 'Pork ','Pepper ']
    }
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe =>recipe.id === recipeId)
    };
  }

  deleteRecipe(recipeId: string){
    return this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
