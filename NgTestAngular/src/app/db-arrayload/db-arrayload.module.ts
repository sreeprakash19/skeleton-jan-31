import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbArrayloadRoutingModule } from './db-arrayload-routing.module';
import { DbArrayloadComponent } from './db-arrayload.component';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DbArrayloadComponent],
  imports: [
    CommonModule,
    DbArrayloadRoutingModule,
    SharedModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class DbArrayloadModule { }
