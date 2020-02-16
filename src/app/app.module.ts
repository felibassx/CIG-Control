import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';

// externas
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { PagesComponent } from './pages/pages.component';
import { FormsModule } from '@angular/forms';
import { APP_ROUTES } from './app-routing.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    FormsModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule,
    APP_ROUTES,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
