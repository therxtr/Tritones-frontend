import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MemberService {
  private apiUrlMembers = 'http://127.0.0.1:8000/memberData/';
  private apiUrlBoard = 'http://127.0.0.1:8000/boardData/';
  
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlMembers);
  }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlBoard);
  }
}