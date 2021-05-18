import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public order: Item[] = [];
  public items: Item[] = [
    { "name": "sushi", "emoji": "🍣" },
    { "name": "soup", "emoji": "🍜" },
    { "name": "burger", "emoji": "🍔" },
    { "name": "pizza", "emoji": "🍕" },
    { "name": "ice cream", "emoji": "🍨" },
    { "name": "shrimp", "emoji": "🍤" },
    { "name": "chicken", "emoji": "🍗" }
  ]

  constructor() { }

  public orderItem(item: Item): void {
    this.order = [...this.order, item];
  }
}