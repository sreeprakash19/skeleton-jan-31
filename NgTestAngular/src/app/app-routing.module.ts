import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/dbArrayload', pathMatch: 'full'},
  { path: 'feature-final', loadChildren: () => import('./feature-final/feature-final.module').then(m => m.FeatureFinalModule) },
  { path: 'dbArrayload', loadChildren: () => import('./db-arrayload/db-arrayload.module').then(m => m.DbArrayloadModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
