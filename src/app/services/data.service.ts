import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8000/cards/data';

  constructor(private http: HttpClient) {
  }

  getData(start: number, limit: number) {
    return this.http.get<any>(`${this.apiUrl}?start=${start}&limit=${limit}`);
  }

}
