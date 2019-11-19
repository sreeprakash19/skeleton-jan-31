import { Component, OnInit, HostBinding  } from '@angular/core';
import { MemberloadService } from '../memberload.service';
import { transition, trigger, query, style, animate, stagger,AnimationEvent  } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  host: {
    '[@pageAnimations]': 'someExpression',
    '(@pageAnimations.start)': 'captureStartEvent($event)',
    '(@pageAnimations.done)': 'captureDoneEvent($event)',
  },
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.man1,.man2', [
          style({opacity: 0, transform: 'translateY(50%)'}),
          stagger('800ms', [
            animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: true }),
        query('h1', [
          style({opacity: 0, transform: 'translateY(-50%)'}),
          stagger('900ms', [
            animate('1500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(10%)'}))
          ])
        ], { optional: true }),
//image1
         query('.img1', [
          style({opacity: 0, transform: 'translateX(-50%)'}),
          stagger('50ms', [
            animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1,transform: 'none' }))
          ])
        ], { optional: true }),
//image2
           query('.img2', [
          style({opacity: 0, transform: 'translateX(-50%)'}),
          stagger('50ms', [
            animate('900ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1,transform: 'none' }))
          ])
        ], { optional: true }),
//image3
          query('.img3', [
          style({opacity: 0, transform: 'translateX(-50%)'}),
          stagger('50ms', [
            animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1,transform: 'none' }))
          ])
        ], { optional: true }),
  
      ]),

      transition(':leave', [
        query('h1,.img1,.img2,.man1,.man2', [
          style({opacity: 1, transform: 'none'}),
          stagger('800ms', [
            animate('1500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 0, transform: 'translateY(50%)' }))
          ])
        ], { optional: true })
      ])
    ]),
  ]
})
@HostBinding('@pageAnimations')
export class LoginComponent implements OnInit {
  someExpression: any = false;
  captureStartEvent(event: AnimationEvent) {
    // the toState, fromState and totalTime data is accessible from the event variable
  }

  captureDoneEvent(event: AnimationEvent) {
    // the toState, fromState and totalTime data is accessible from the event variable
  }

  constructor(public taskService: MemberloadService) { }

  ngOnInit() {

  }

}

