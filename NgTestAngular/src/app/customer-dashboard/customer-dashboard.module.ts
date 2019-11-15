import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

import { SharedModule } from '../shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerDashboardComponent],
  imports: [
    SharedModule,
    CustomerRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule

  ]
})
export class CustomerDashboardModule { }
