import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyMemberRoutingModule } from './family-member-routing.module';
import { FamilyMemberComponent } from './family-member.component';


import { FlexLayoutModule } from '@angular/flex-layout';
import {AppMaterialModule} from '../app-material/app-material.module';


@NgModule({
  declarations: [FamilyMemberComponent],
  imports: [
    CommonModule,
    FamilyMemberRoutingModule,
    
    FlexLayoutModule,
    AppMaterialModule
  ]
})
export class FamilyMemberModule { }
