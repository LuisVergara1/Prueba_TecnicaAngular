import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  buscar(url: string): Observable<any> {
    return this.http.get<any>(url);
  }


  buscar_id(url:string):Observable<any>{
    return this.http.get<any>(url);
  }

}
