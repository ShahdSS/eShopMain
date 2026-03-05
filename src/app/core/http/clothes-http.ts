import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class clothesHttp {
    readonly apiUrl = 'https://api.escuelajs.co/api/v1/products';
}