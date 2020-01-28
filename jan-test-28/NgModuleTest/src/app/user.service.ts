import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import {
  AngularFirestoreDocument,
  AngularFirestore
} from '@angular/fire/firestore';

import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { delay } from 'rxjs/operators';







//----------------- just saving to the next screen is the task
const ALTER_EGOS = ['Eric'];

export class CollegeDept {
  deptHead = '';
  deptName = '';
  constructor(deptHead, deptName) {
    this.deptHead = deptHead;
    this.deptName = deptName;
  }
}

export class College {
  CollegeName = '';
  PrincipalName = '';
  constructor(CollegeName, PrincipalName) {
    this.CollegeName = CollegeName;
    this.PrincipalName = PrincipalName;
  }
}

export class CollegeEmp {
  empId = '';
  empName = '';
  skill = '';
}

export class Department {
  deptHead = '';
  deptName = '';
  constructor(deptHead, deptName) {
    this.deptHead = deptHead;
    this.deptName = deptName;
  }
}

export class Team {
  teamName = '';
  teamManager = '';
  teamDept: Department;
  employees: Employee[];
}

export class Employee {
  empId = '';
  empName = '';
  skill = '';
  constructor(empId, empName, skill) {
    this.empId = empId;
    this.empName = empName;
    this.skill = skill;
  }
}


export const ALL_SKILLS = [
  { name: 'Java', displayName: 'Java' },
  { name: 'Angular', displayName: 'Angular' },
  { name: 'Dot Net', displayName: 'Dot Net' }
];

export const ALL_TEAMS: Team[] = [
  {
    "teamName": "Java Team",
    "teamManager": "Yogi",
    "teamDept": {
      "deptHead": "Modi",
      "deptName": "M Commerce"
    },
    "employees": [
      {
        "empId": "101",
        "empName": "Harish",
        "skill": "Java"
      },
      {
        "empId": "111",
        "empName": "Mohit",
        "skill": "Angular"
      }
    ]
  }
];



@Injectable({
  providedIn: 'root',
})
export class UserService {
  


  //-------------------
  public counter = 0;
  hellotext = '';
  hello = 0;
  footerdisplay = '';
  sidebardisplay = '';
  resultdisplay = '';
  moredisplay = '';
  hellostring = '';
  public myData: BehaviorSubject<number> = new BehaviorSubject<number>(this.hello);
  public myLoginData: BehaviorSubject<string> = new BehaviorSubject<string>(this.hellostring);


  myarray: any[];
  constructor(private http: HttpClient,  public afAuth: AngularFireAuth, private afs: AngularFirestore) { }

  increaseCounter() {
    this.counter++;
    this.hello = this.counter;
    this.myData.next(this.hello);
  }

  sendData(mytext) {
    this.myData.next(mytext);
  }

  //team
  getSkills() {
    return of(ALL_SKILLS);
  }
  getAllTeams(): Observable<Team[]> {
    return of(ALL_TEAMS);
  }
  getTeamByName(name: string): Observable<Team> {
    return this.getAllTeams().pipe(map(allTeams => allTeams.find(team => team.teamName === name)));
  }
 
}


