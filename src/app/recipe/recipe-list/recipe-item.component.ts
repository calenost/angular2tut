import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent implements OnInit {
@Input() recipe:Recipe;
@Output() recipeSelected= new EventEmitter<Recipe>();
onSelect()
{
 this.recipeSelected.emit(this.recipe);
}
  constructor() { }

  ngOnInit() {
  }

}
