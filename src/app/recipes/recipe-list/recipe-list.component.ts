import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
            new Recipe('A test recipe', 'this is a simple test', 'https://upload.wikimedia.org/wikipedia/commons/5/57/990402-ians-recipe-01-IMG_4724.jpg')
           ];
      @Output() recipeWasSelected = new EventEmitter<Recipe>();

    
    constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

// import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// import { Recipe } from '../recipe.model';

// @Component({
//   selector: 'app-recipe-list',
//   templateUrl: './recipe-list.component.html',
//   styleUrls: ['./recipe-list.component.css']
// })
// export class RecipeListComponent implements OnInit {
//   recipes: Recipe[] = [
//     @Output() recipeWasSelected = new EventEmitter<Recipe>();
//     new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
//     new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
//   ];

//   constructor() { }

//   ngOnInit() {
//   }

//   onRecipeSelected(recipe: Recipe) {
//    this.recipeWasSelected.emit(recipe);
//   }

// }
