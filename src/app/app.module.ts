import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ClientComponent } from './components/client/client.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Acceuil2Component } from './components/acceuil2/acceuil2.component';
import { FraisIncompressibleComponent } from './components/fraisincompressible/frais-incompressible.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ClientComponent,
    Acceuil2Component,
    FraisIncompressibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      {
        path: '',
        component: Acceuil2Component
      },
      {
        path: 'fraisIncompressibles',
        component: FraisIncompressibleComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
