import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  grid: number[][] = [
  [0, 2, 2, 2, 2, 2, 4], 
  [1, 3, 3, 3, 3, 3, 5],
  [7, 8, 6, 8, 6, 8, 7],
  [5, 3, 3, 3, 3, 3, 1],
  [4, 2, 2, 2, 2, 2, 0]]









}
