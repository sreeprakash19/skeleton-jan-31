import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperpageComponent } from './stepperpage.component';

describe('StepperpageComponent', () => {
  let component: StepperpageComponent;
  let fixture: ComponentFixture<StepperpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
