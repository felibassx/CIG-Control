import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';

// REDUX
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// externas
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { PagesComponent } from './pages/pages.component';
import { FormsModule } from '@angular/forms';
import { APP_ROUTES } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    APP_ROUTES,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
