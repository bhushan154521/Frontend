import { Component } from '@angular/core';

@Component({
  selector: 'app-op',
  templateUrl: './op.component.html',
  styleUrls: ['./op.component.css']
})
export class OpComponent
{
  colleges:string[] = ["RIT","Walachand","VIT","MIT","VJTI","IIT"];

  constructor()
  {
    for(let i=0;i<this.colleges.length;i++)
    {
      console.log(this.colleges[i]);
    }
  }

}
