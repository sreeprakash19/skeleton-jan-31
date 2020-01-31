import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainmoduleRoutingModule } from './mainmodule-routing.module';
import { MainCompComponent } from './main-comp/main-comp.component';


@NgModule({
  declarations: [MainCompComponent],
  imports: [
    CommonModule,
    MainmoduleRoutingModule
  ]
})
export class MainmoduleModule { }
