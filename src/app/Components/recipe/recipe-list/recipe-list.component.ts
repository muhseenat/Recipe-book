import { Component, OnInit } from '@angular/core';
import  {RecipeModel} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes:RecipeModel[]=[
  new RecipeModel('Chappathi','Kerale Style','Porotta is a layered Indian and Sri Lankan flatbread made from Maida or Atta, alternatively known as flaky ribbon pancake.','https://www.shutterstock.com/image-photo/kerala-parotta-popularly-known-paratha-260nw-1641709639.jpg')
  ,
  new RecipeModel('Kubus','Kerale Style','Porotta is a layered Indian and Sri Lankan flatbread made from Maida or Atta, alternatively known as flaky ribbon pancake.','https://www.shutterstock.com/image-photo/kerala-parotta-popularly-known-paratha-260nw-1641709639.jpg')
,
  new RecipeModel('Poratta','Kerale Style','Porotta is a layered Indian and Sri Lankan flatbread made from Maida or Atta, alternatively known as flaky ribbon pancake.','https://www.shutterstock.com/image-photo/kerala-parotta-popularly-known-paratha-260nw-1641709639.jpg')
 ]


  constructor() { }

  ngOnInit(): void {
  }

}
