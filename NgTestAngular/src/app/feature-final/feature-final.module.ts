import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { FeatureFinalRoutingModule } from './feature-final-routing.module';
import { FeatureFinalComponent } from './feature-final.component';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FeatureFinalComponent],
  imports: [
    //CommonModule,
    FeatureFinalRoutingModule,
    SharedModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class FeatureFinalModule { }
