import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {

  constructor( private http: HttpClient ) { }

  getProjectList(): Observable <any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/photos")
  } 
}
