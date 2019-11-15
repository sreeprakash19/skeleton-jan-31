import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbArrayloadComponent } from './db-arrayload.component';

describe('DbArrayloadComponent', () => {
  let component: DbArrayloadComponent;
  let fixture: ComponentFixture<DbArrayloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbArrayloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbArrayloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
