import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getPost(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPost(article: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, article);
  }

  updatePost(article: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${article.id}`, article);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  
}