import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Compte } from '../model/Compte';
import { Injectable } from '@angular/core';

const BANQUE_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})


export class CompteServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public findAllCompte(): Observable<any> {
    return this.http.get<Compte>(BANQUE_SERVER + '/compte/Comptes');
  }

  public deleteCompte(compte: Compte): Observable<any> {
    return this.http.delete<Compte>(BANQUE_SERVER + '/compte/' + compte.idCompte, this.httpOptions);
  }

  public getById(id: number): Observable<any> {
    return this.http.get<Compte>(BANQUE_SERVER + '/compte/findByIdCompte/' + id);
  }

  public addNewCompte(compte: Compte): Observable<any> {
    return this.http.post<Compte>(BANQUE_SERVER + '/compte/ajouterCompte', JSON.stringify(compte), this.httpOptions);
  }

  public updateCompte(compte: Compte): Observable<any> {
    return this.http.put<Compte>(BANQUE_SERVER + '/compte/' + compte.idCompte, JSON.stringify(compte), this.httpOptions);
  }
}
