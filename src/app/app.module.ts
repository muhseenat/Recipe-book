import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Headercomponent} from './components/header/header.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './components/recipe/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    Headercomponent,
    AppComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
