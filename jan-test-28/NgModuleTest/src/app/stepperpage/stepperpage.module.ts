import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperpageRoutingModule } from './stepperpage-routing.module';
import { StepperpageComponent } from './stepperpage.component';

import {AppMaterialModule} from '../app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [StepperpageComponent],
  imports: [
    CommonModule,
    StepperpageRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ]
})
export class StepperpageModule { }
