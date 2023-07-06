import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/food';
import { __param } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    foods: Food[] = [];
    constructor(private api:FoodService, activateRoute:ActivatedRoute){
      activateRoute.params.subscribe((params)=>{                            // for search foods componenets
        if(params.searchTerm)                                               // for search foods componenets
        this.foods=this.api.getAllFoodBySearchTerm(params.searchTerm)       // for search foods componenets
        else
        this.foods = api.getAll()   // get all the data of sample foods
      })
                 
    }
    food:Food[]=[];
    ngOnInit(){
        
    }
}
