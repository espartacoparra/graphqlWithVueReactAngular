import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  api = "http://localhost:4000/graphqljson"
  constructor(private http: HttpClient) { }

  getUsers(query): Observable<any> {
    return this.http.post<any>(this.api, query)
  }

}
