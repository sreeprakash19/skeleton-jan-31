import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent  {
  items: Observable<any[]>;
  constructor(private router: Router, db: AngularFirestore){
   this.items = db.collection('items').valueChanges();
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





