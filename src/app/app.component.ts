import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './interfaces/item';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public order: Item[] = [];
  public items: Observable<Item[]>;
  public selected: Item;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.items = this.api.getMenu();
  }

  public orderItem(item: Item): void {
    this.order = [...this.order, item];
  }
}