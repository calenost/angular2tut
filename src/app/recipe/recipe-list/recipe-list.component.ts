import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
recipe=new Recipe("Dummy", "Dummy","https://unsplash.it/500/500");
  @Output() recipeSelected= new EventEmitter<Recipe>();
  selectedRecipe:Recipe;
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);

  }

}
