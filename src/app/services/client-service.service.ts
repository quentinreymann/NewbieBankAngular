import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/Client';

const RECIPE_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getAllClients(): Observable<any> {
    return this.http.get<Client>(RECIPE_SERVER + '/client/Clients');
  }

  public deleteClient(client: Client): Observable<any> {
    return this.http.delete<Client>(RECIPE_SERVER + '/client/' + client.id, this.httpOptions);
  }

  public getClientById(id: number): Observable<any> {
    return this.http.get<Client>(RECIPE_SERVER + '/client/findByIdClient/' + id);
  }

  public createClient(client: Client): Observable<any> {
    return this.http.post<Client>(RECIPE_SERVER + '/client/ajouterClient', JSON.stringify(client), this.httpOptions);
  }

  public updateRecipe(client: Client): Observable<any> {
    return this.http.put<Client>(RECIPE_SERVER + '/client/' + client.id, JSON.stringify(client), this.httpOptions);
  }
}
