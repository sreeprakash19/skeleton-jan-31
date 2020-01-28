import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureStartRoutingModule } from './feature-start-routing.module';
import { FeatureStartComponent } from './feature-start.component';


@NgModule({
  declarations: [FeatureStartComponent],
  imports: [
    CommonModule,
    FeatureStartRoutingModule
  ]
})
export class FeatureStartModule { }
