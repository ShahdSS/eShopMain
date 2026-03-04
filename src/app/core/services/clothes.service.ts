import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { clothes } from '../models/clothes.model';
import { clothesHttp } from '../http/clothes-http';

@Injectable({
  providedIn: 'root',
})
export class ClothesService {
  private apiUrl = clothesHttp;

  constructor(private http: HttpClient) {}

  getClothes(): Observable<clothes[]> {
    return this.http.get<clothes[]>(this.apiUrl);
  }
}
