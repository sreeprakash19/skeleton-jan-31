import { Component } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgTestAngular';

  constructor(private router: Router){

  }

  clickedEager(){
  console.log("Reached Eager");
  	this.router.navigate(['/home']);
  }

  clickedLazy(){
  console.log("Reached Lazy");
  	this.router.navigate(['/feature-final']);
  }
}
