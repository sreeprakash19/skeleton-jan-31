import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
   { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
   { path: 'install-login', loadChildren: () => import('./install-login/install-login.module').then(m => m.InstallLoginModule) },
   { path: 'login-fail', loadChildren: () => import('./install-login/install-login.module').then(m => m.InstallLoginModule) },
   { path: 'login-olduser', loadChildren: () => import('./install-login/install-login.module').then(m => m.InstallLoginModule) },
   { path: 'login-retry', loadChildren: () => import('./install-login/install-login.module').then(m => m.InstallLoginModule) },
   { path: 'login-photourl', loadChildren: () => import('./install-login/install-login.module').then(m => m.InstallLoginModule) },
   { path: 'login-photourldialog', loadChildren: () => import('./install-login/install-login.module').then(m => m.InstallLoginModule) },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
