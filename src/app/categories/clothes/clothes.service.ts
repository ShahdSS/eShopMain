import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { clothes } from './clothes.model';

@Injectable({
  providedIn: 'root',
})
export class ClothesService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}

  getClothes(): Observable<clothes[]> {
    return this.http.get<clothes[]>(this.apiUrl);
  }
}
