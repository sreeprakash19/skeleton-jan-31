import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import {AppMaterialModule} from './app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,

    AngularFireModule.initializeApp(environment.firebase),
    AppMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CustomerDashboardModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
