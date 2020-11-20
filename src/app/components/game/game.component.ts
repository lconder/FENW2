import {Component, HostListener, OnInit} from '@angular/core';
import { CacheService } from '../../services/cache.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  numberOfCards: number;
  cards: String[] = [];
  possible_values: String[] = [
    'assets/images/AS.jpg',
    'assets/images/AH.jpg',
    'assets/images/AD.jpg',
    'assets/images/AC.jpg',
  ];

  constructor(public cache: CacheService) { }

  ngOnInit(): void {
    this.cache.getItem("cards").subscribe(
      item => {
        // @ts-ignore
        this.numberOfCards = item || 20;
        this.drawDashboard();
      },
      () => this.numberOfCards = 20
    );
  }

  drawDashboard() {
    let matches = this.numberOfCards/2;
    for (let i = 0; i < matches; i = i+1) {
      this.cards.push(this.possible_values[
        Math.floor(Math.random() * (this.possible_values.length-1 + 1))
      ]);
    }
    this.cards = [...this.cards, ...this.cards]
    this.cards = this.cards.sort(() => Math.random() - 0.5);
  }

  @HostListener('document:click', ['$event'])
  click(event) {
    let target = event.target;

   if ( target.nodeName.localeCompare("IMG") === 0 ) {
     console.log(this.cards[target.id]);
   }

  }
}
