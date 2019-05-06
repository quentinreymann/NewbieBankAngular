import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ClientComponent } from './components/client/client.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewclientComponent } from './components/newclient/newclient.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ClientComponent,
    NewclientComponent,
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
        path: 'ajouterclient/:client_id',
        component: NewclientComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
