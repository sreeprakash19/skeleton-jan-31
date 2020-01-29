import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'family-member', loadChildren: () => import('./family-member/family-member.module').then(m => m.FamilyMemberModule) },
{ path: 'feature-start', loadChildren: () => import('./feature-start/feature-start.module').then(m => m.FeatureStartModule) },
{ path: '**', redirectTo: '' , pathMatch: 'full'},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
