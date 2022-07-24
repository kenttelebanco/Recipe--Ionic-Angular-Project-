import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: Recipe;
  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService,
              private router: Router, private alertCtrl: AlertController ) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.activatedRoute.paramMap.subscribe(paramMAP => {
      if(!paramMAP.has('recipeId')){
        return;
      }
      const recipedId = paramMAP.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipedId);
    });
  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  onDeleteRecipe(){
    this.alertCtrl.create({
      header: 'Are You Sure',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: ()=>{
            this.recipeService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['tabs/recipe']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
