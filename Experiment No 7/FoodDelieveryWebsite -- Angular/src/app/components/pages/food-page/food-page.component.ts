import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
// import { Cart } from 'src/app/shared/model/cart';
import { Food } from 'src/app/shared/model/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{
  food!: Food; 
  constructor(activateRoute:ActivatedRoute,private api:FoodService){
    activateRoute.params.subscribe((params)=>{                            // for  food-id  componenets
      if(params.id)    
      this.food = api.getFoodbyId(params.id);
})

  }

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
//add to cart

}
