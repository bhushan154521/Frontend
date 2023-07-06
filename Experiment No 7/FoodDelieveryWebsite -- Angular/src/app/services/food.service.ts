import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sample_foods
  }
  //search food  & returns the food data & search bar
  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food =>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  // get food by id
  getFoodbyId(foodId:string){
    return this.getAll().find(Food =>Food.id == foodId) ?? new Food();  // food details
  }
}
