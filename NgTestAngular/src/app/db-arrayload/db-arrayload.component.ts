import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import {map} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

/*
export interface UserInfo{
  
      name:string;
      email:string;
      displayName:string;
      phoneNo:string;
      photoUrl:string;

}
*/



@Component({
  selector: 'app-db-arrayload',
  templateUrl: './db-arrayload.component.html',
  styleUrls: ['./db-arrayload.component.css']
})
export class DbArrayloadComponent implements OnInit {
 
  form: FormGroup = null;
  showretry = false;
   userDetails: any[] = [
    {
      "email": "",
      "uid": "",
      "displayName": "",
      "photoUrl": ""
    }];
	constructor(public afAuth: AngularFireAuth, public formBuilder: FormBuilder, public afs : AngularFirestore) { 


	}
  ngOnInit() {
    this.form = this.formBuilder.group({
    }); //initializing the variable here using the formbuilder
    const userDataAfterLogin: FormGroup[] = this.userDetails.map( v => {
        return this.formBuilder.group({
          email: [v.email],
          uid: [v.uid],
          displayName:[v.displayName],
          photoURL: [v.photoURL] 
        });
      });
      const userDataAfterLoginArr: FormArray = new FormArray(userDataAfterLogin);
      (this.form as FormGroup).setControl('userDetails', userDataAfterLoginArr);  
  }

  GoogleLogin(){
    const provider = new auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then(successLogin => {
      const userDataAfterLogin: FormGroup[] = this.userDetails.map( v => {
        return this.formBuilder.group({
          email: [successLogin.user.email],
          uid: [successLogin.user.uid],
          displayName:[successLogin.user.displayName],
          photoURL: [successLogin.user.photoURL] 
        });
      });
      const userDataAfterLoginArr: FormArray = new FormArray(userDataAfterLogin);
      (this.form as FormGroup).setControl('userDetails', userDataAfterLoginArr);  
      const setDoc = this.afs.collection('UserData').doc('jEiXTyjacmMzEyMwZI8KXqflENk2').set(this.form.value);
    });


  }
}
