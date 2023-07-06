import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent // search home componenet
  },
  {
    path:'search/:searchTerm', component:HomeComponent // search path for search bar
  },
  {
    path:'food/:id', component:FoodPageComponent // search path for foodpage
  },
  {
    path:'login', component:LoginComponent // search path for login
  },
  {
    path:'AboutUs', component:AboutUsComponent // search path for aboutus page
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
