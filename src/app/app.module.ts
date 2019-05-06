import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ClientComponent } from './components/client/client.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { Acceuil2Component } from './components/acceuil2/acceuil2.component';
// import { FraisIncompressibleComponent } from './components/fraisincompressible/frais-incompressible.component';
import { NewclientComponent } from './components/newclient/newclient.component';
import { ClientlistComponent } from './components/clientlist/clientlist.component';
import { ResumeclientComponent } from './components/resumeclient/resumeclient.component';
import { ClientdetailsComponent } from './components/clientdetails/clientdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ClientComponent,
    NewclientComponent,
    ClientlistComponent,
    ResumeclientComponent,
    ClientdetailsComponent,

    // Acceuil2Component,
   // FraisIncompressibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      {
        path: '',
        component: AcceuilComponent
      },
      {
        path: 'client',
        component: ClientComponent
      },
      {
        path: 'ajouterclient',
        component: NewclientComponent
      },
      {
        path: 'consulter',
        component: ClientlistComponent
      },
      {
        path: 'client/:client_id',
        component: ClientdetailsComponent
      }
    ,
    {
      path: 'ajouterclient/:client_id',
      component: NewclientComponent
    },



      // {
      //   path: '',
      //   component: Acceuil2Component
      // },
      // {
      //   path: 'fraisIncompressibles',
      //   component: FraisIncompressibleComponent
      // }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
