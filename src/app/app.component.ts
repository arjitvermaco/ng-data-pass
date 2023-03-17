import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ey-angular';
  //write the logic for our component
  updateData(item){
    console.log("Warning");
    console.log(item);
  }
  
}
