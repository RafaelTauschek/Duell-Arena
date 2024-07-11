import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  allCards: any[] = [];
  start = 0;
  limit = 100;

  constructor(private dataService: DataService) {}

  loadData() {
    this.dataService.getData(this.start, this.limit).subscribe(
      newData => {
        this.allCards = [...this.allCards, ...newData];
        this.start += this.limit;
      },
      error => {
        console.error('Error loading data:', error);
      }
    );
  }
}
