import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   
{
    choice = 0;
    nextChoice()
    {
      this.choice++;
    }
  }
  

