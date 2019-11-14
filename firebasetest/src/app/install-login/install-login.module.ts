import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstallLoginRoutingModule } from './install-login-routing.module';
import { InstallLoginComponent } from './install-login.component';


@NgModule({
  declarations: [InstallLoginComponent],
  imports: [
    CommonModule,
    InstallLoginRoutingModule
  ]
})
export class InstallLoginModule { }
