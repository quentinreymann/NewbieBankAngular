import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ClientComponent } from './components/client/client.component';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Acceuil2Component } from './components/acceuil2/acceuil2.component';
import { FraisIncompressibleComponent } from './components/fraisincompressible/frais-incompressible.component';
import { NewclientComponent } from './components/newclient/newclient.component';

import { TableaufraisComponent } from './components/tableaufrais/tableaufrais.component';
import { ClientlistComponent } from './components/clientlist/clientlist.component';
import { ResumeclientComponent } from './components/resumeclient/resumeclient.component';
import { ClientdetailsComponent } from './components/clientdetails/clientdetails.component';
import { FraisincresumeComponent } from './components/fraisincresume/fraisincresume.component';
import { FraisincformComponent } from './components/fraisincform/fraisincform.component';
import { CompteComponent } from './components/compte/compte.component';
import { NewcompteComponent } from './components/newcompte/newcompte.component';
import { MoncompteComponent } from './components/moncompte/moncompte.component';
import { DetailcompteComponent } from './components/detailcompte/detailcompte.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ClientComponent,
    Acceuil2Component,
    FraisIncompressibleComponent,
    NewclientComponent,
    FraisincformComponent,
    TableaufraisComponent,
    ClientlistComponent,
    ResumeclientComponent,
    ClientdetailsComponent,
    FraisincresumeComponent,
    CompteComponent,
    NewcompteComponent,
    MoncompteComponent,
    DetailcompteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
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
        path: 'compte',
        component: CompteComponent
      },
      {
        path: 'consultercompte',
        component: MoncompteComponent
      },
      {
        path: 'ajoutercompte',
        component: NewcompteComponent
      },
      {
        path: 'client/:client_id',
        component: ClientdetailsComponent
      },
      {
      path: 'compte/:nomCompte',
      component: DetailcompteComponent
      },
      {
      path: 'ajouterclient/:client_id',
      component: NewclientComponent
      },
      {
      path: 'fraisIncompressibles',
      component: FraisIncompressibleComponent
      },
      {
        path: 'fraisincform',
        component: FraisincformComponent
      },
      {
          path: 'fraisincresume',
          component: FraisincresumeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

