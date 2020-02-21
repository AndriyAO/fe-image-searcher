import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  getImages(query) {
    return this.http.get<any>(`${environment.IMAGE_SEARCH_URL}/image?query=${query}`);
  }

  like(imageId) {
  return this.http.post(`${environment.IMAGE_SEARCH_URL}/image/${imageId}`, {});
  }

}