import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FraisIncompressibles } from '../model/FraisIncompressibles';
const FRAIS_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class FraisIncompressibleServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  public getAllfraisIncompressibles(): Observable<any> {
    return this.http.get<FraisIncompressibles>(FRAIS_SERVER + '/fraisincompressibles/all');
  }

  public deleteFraisIncompressibles(fraisincompressible: FraisIncompressibles): Observable<any> {
    return this.http.delete<FraisIncompressibles>(FRAIS_SERVER + '/fraisincompressibles/' + fraisincompressible.idFraisIncompressible,
     this.httpOptions);
  }

  public getById(id: number): Observable<any> {
    return this.http.get<FraisIncompressibles>(FRAIS_SERVER + '/fraisincompressibles/findById/' + id);
  }

  public saveFraisIncompressible(fraisincompressible: FraisIncompressibles): Observable<any> {
    return this.http.post<FraisIncompressibles>(FRAIS_SERVER + '/fraisincompressibles/ajouterFraisIncompressibles',
      JSON.stringify(fraisincompressible), this.httpOptions);
  }

  public updateFraisIncompressible(fraisincompressible: FraisIncompressibles): Observable<any> {
    return this.http.put<FraisIncompressibles>(FRAIS_SERVER + '/fraisincompressibles/' + fraisincompressible.idFraisIncompressible,
      JSON.stringify(fraisincompressible), this.httpOptions);
  }
}
