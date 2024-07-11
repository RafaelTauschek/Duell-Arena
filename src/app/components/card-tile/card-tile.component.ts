import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-tile.component.html',
  styleUrl: './card-tile.component.scss'
})
export class CardTileComponent {
  @Input() type: number | null = null;
  @Input() card: string | null = null;

  get typeLabel() {
    switch (this.type) {
      case 0: return 'Deck';
      case 1: return 'Graveyard';
      case 2: return 'Trap/Spell';
      case 3: return 'Monster';
      case 4: return 'Extra Deck';
      case 5: return 'Field Card';
      case 6: return 'Extra Monster';
      case 7: return 'Banished';
      case 8: return 'Empty';
      default: return '';
    }
  }

}
