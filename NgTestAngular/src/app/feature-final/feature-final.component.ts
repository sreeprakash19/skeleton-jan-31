import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router} from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface SanityItem {
  value: string;
  viewValue: string;
}

export interface SanityGroup {
  name: string;
  SanityItems: SanityItem[];
}
export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-feature-final',
  templateUrl: './feature-final.component.html',
  styleUrls: ['./feature-final.component.css']
})
export class FeatureFinalComponent  {

  items: Observable<any[]>;
  constructor(private router: Router, db: AngularFirestore){
   this.items = db.collection('items').valueChanges();
   }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  SanityControl = new FormControl('');
  SanityGroups: SanityGroup[] = [
    {
      name: 'Existing User- Clear',
      SanityItems: [
      {value: 'User-0', viewValue: 'Node Modules'},
      {value: 'User-1', viewValue: 'Angular Project'}
      ]
      }
  ];

   clickedEager(){
  console.log("Reached Eager");
    this.router.navigate(['/home']);
  }

  clickedLazy(){
  console.log("Reached Lazy");
    this.router.navigate(['/feature-final']);
  }

  }

