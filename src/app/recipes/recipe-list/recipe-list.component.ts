import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'simply a test', 'https://cdn.oem.com.mx/elesto/2018/06/corea-vs-mexico-600x237.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
