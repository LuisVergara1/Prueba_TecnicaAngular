import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  crearComentario(idFeature: string, comentario: string): Observable<any> {
    const url = `${this.apiUrl}/features/${idFeature}/comments/create`;
    console.log(url)
    return this.http.post(url, { body: comentario });
  }

  getComentarios(): Observable<any[]> {
    const url = `${this.apiUrl}/features/comments/getall`;
    return this.http.get<any[]>(url);
  }


  deleteComentarios(idcomments:number): Observable<any[]> {
    const url = `${this.apiUrl}/features/${idcomments}/comments/delete`;
    return this.http.delete<any[]>(url);
  }


  updateComentario(commentId: string, body: string): Observable<any> {
    const url = `${this.apiUrl}/features/${commentId}/comments/update`;
    return this.http.put(url, { body });
  }
  
}
