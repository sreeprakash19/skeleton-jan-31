import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'form-control-array', loadChildren: () => import('./form-control-array/form-control-array.module').then(m => m.FormControlArrayModule) }, { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }, { path: 'main-page', loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule) }, { path: 'install-login', loadChildren: () => import('./install-login/install-login.module').then(m => m.InstallLoginModule) },  { path: 'fcarray-firestoreArray', loadChildren: () => import('./form-control-array/form-control-array.module').then(m => m.FormControlArrayModule) },
  { path: 'fcarray-firestoreControl', loadChildren: () => import('./form-control-array/form-control-array.module').then(m => m.FormControlArrayModule) },
  { path: 'fcarray-select', loadChildren: () => import('./form-control-array/form-control-array.module').then(m => m.FormControlArrayModule) },{ path: 'fcarray-syncValidator', loadChildren: () => import('./form-control-array/form-control-array.module').then(m => m.FormControlArrayModule) },
  { path: 'fcarray-AsyncValidator', loadChildren: () => import('./form-control-array/form-control-array.module').then(m => m.FormControlArrayModule) },
  { path: 'fcarray-materror', loadChildren: () => import('./form-control-array/form-control-array.module').then(m => m.FormControlArrayModule) },
  { path: 'fcarray-localarray', loadChildren: () => import('./form-control-array/form-control-array.module').then(m => m.FormControlArrayModule) },
  { path: 'fcarray-firestoreArray', loadChildren: () => import('./form-control-array/form-control-array.module').then(m => m.FormControlArrayModule) },
  { path: 'fcarray-firestoreControl', loadChildren: () => import('./form-control-array/form-control-array.module').then(m => m.FormControlArrayModule) },
  { path: 'fcarray-select', loadChildren: () => import('./form-control-array/form-control-array.module').then(m => m.FormControlArrayModule) },
   { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
