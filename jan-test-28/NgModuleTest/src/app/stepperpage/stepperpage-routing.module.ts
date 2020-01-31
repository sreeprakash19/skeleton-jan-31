import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepperpageComponent } from './stepperpage.component';

const routes: Routes = [{ path: '', component: StepperpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperpageRoutingModule { }
