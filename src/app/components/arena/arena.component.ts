import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-arena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arena.component.html',
  styleUrl: './arena.component.scss'
})
export class ArenaComponent implements OnInit {
  constructor(public cardService: CardService) {

  }


  async ngOnInit(): Promise<void> {
    this.cardService.loadData();

    setTimeout(() => {
      console.log(this.cardService.allCards)
    }, 2000)
  }

}