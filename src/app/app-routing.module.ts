import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FavouriteComponent } from "./favourite/favourite.component";

const routes: Routes = [ {
  path: "home", component: HomeComponent
},
{
  path: "favourite", component: FavouriteComponent
},
{
  path: "**", component: HomeComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
