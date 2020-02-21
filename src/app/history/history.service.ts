import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  getHistory() {
    return this.http.get(`${environment.IMAGE_SEARCH_URL}/history`);
  }
}
