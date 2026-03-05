import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { clothes } from '../models/clothes.model';
import { clothesHttp } from '../http/clothes-http';

@Injectable({
  providedIn: 'root',
})
export class ClothesService {
  clothesList = signal<clothes[]>([]);

  constructor(
    private http: HttpClient,
    private clothesHttp: clothesHttp
  ) {}
  
  // loadClothes(): void {
  //   this.http.get<clothes[]>(this.clothesHttp.apiUrl)
  //   .subscribe({
  //     next: (res) => this.clothesList.set(res),
  //     error: (err) => console.error('Error loading clothes', err),
  //   });
  // }

  
getClothes(): Observable<clothes[]> {
    return this.http.get<clothes[]>(this.clothesHttp.apiUrl)
    // .subscribe({
    //   next: (res) => this.clothesList.set(res),
    //   error: (err) => console.error('Error loading clothes', err),
    // });
  }

}

// private apiUrl = clothesHttp;

// constructor(private http: HttpClient) {}
 
// getClothes(): Observable<clothes[]> {

//   return this.http.get<clothes[]>(this.apiUrl);

// }