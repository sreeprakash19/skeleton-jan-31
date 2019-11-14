import { Component, OnInit,HostBinding } from '@angular/core';
import { transition, trigger, query, style, animate, stagger,AnimationEvent  } from '@angular/animations';
import { routerTransition } from '../route.animation';

@Component({
  selector: 'app-lazy',
  host: {
    '[@childAnimations]': 'someExpression',
    '(@childAnimations.start)': 'captureStartEvent($event)',
    '(@childAnimations.done)': 'captureDoneEvent($event)',
  },
  template: `<h1>Lazy1</h1>
<h2>helloo</h2>
<div fxLayout="row" fxLayoutAlign="center center" class="logincomp" >
    <img fxFlex="25%" src="/assets/man1-first.png"  />

    <mat-card fxFlex="25%"  class="row-height">
        <mat-card-header>
            <mat-card-title>Login page</mat-card-title>
            <mat-card-subtitle>
               
            </mat-card-subtitle>
        </mat-card-header>
          <mat-card-content fxLayout="column">
            <button mat-raised-button *ngIf="!showretry" color="primary" (click)="GoogleLogin()">
                Google login
            </button>
        </mat-card-content>   
    </mat-card>

    <img fxFlex="25%" src="/assets/man2-first.png"  />

</div>
 `,
 animations:[
  trigger('childAnimations', [
    transition(':enter', [
      query('img', [
        style({opacity: 0, transform: 'translateY(50%)'}),
        stagger('800ms', [
          animate('1500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
        ])
      ], { optional: true }),
      query('h2', [
        style({opacity: 0, transform: 'translateY(50%)'}),
        stagger('800ms', [
          animate('1500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
        ])
      ], { optional: true })
    ]),
    transition(':leave', [
      query('img', [
        style({opacity: 1, transform: 'none'}),
        stagger('800ms', [
          animate('1500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 0, transform: 'translateY(50%)' }))
        ])
      ], { optional: true })
    ])
  ]),
]

})

@HostBinding('@childAnimations')
export class Lazy1Component  
  {
    someExpression: any = false;
    captureStartEvent(event: AnimationEvent) {
      // the toState, fromState and totalTime data is accessible from the event variable
    }
  
    captureDoneEvent(event: AnimationEvent) {
      // the toState, fromState and totalTime data is accessible from the event variable
    }
  
}
