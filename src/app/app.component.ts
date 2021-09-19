import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwh-todo';  
constructor()
{
  setTimeout(() => {
    this.title="changes title" 
  }, 2000);
}
  HomeClick()
  {
    console.log("you clicked on Home");
  }
}
