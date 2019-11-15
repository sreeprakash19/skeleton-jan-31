import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbArrayloadComponent } from './db-arrayload.component';

const routes: Routes = [{ path: '', component: DbArrayloadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DbArrayloadRoutingModule { }
