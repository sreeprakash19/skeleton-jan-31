import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureStartRoutingModule } from './feature-start-routing.module';
import { FeatureStartComponent,DialogOverviewExampleDialog  } from './feature-start.component';


import { FlexLayoutModule } from '@angular/flex-layout';
import {AppMaterialModule} from '../app-material/app-material.module';




@NgModule({
  declarations: [FeatureStartComponent,DialogOverviewExampleDialog ],
  imports: [
    CommonModule,
    FeatureStartRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
  ],
  entryComponents: [DialogOverviewExampleDialog]

})
export class FeatureStartModule { }
