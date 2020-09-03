import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiServer = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8;',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'access-control-expose-headers': 'access-control-allow-origin'
    })
  }

  constructor(private httpClient: HttpClient) { }

  pushUrl(imgUrl): Observable<any> {
    return this.httpClient.post(this.apiServer, imgUrl, this.httpOptions)
    // return this.httpClient.post(this.apiServer, imgUrl, this.httpOptions)
  }

  pullLatLng(): Observable<any> {
    return this.httpClient.get(this.apiServer)
    // return this.httpClient.get(this.apiServer)
  }
}
