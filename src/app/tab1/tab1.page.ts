import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {
recipes: Recipe[];
loadedRecipe: Recipe;


  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(){
  }

  ionViewDidEnter(){
    this.recipes = this.recipeService.getAllRecipes();
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
}
