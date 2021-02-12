import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  /* 
    List-Detail View: Select a menu item from the LIST view and watch it appear in the DETAIL view.
    Use the OnPush change detection strategy
  */
 
  public items = [
    {name: 'sushi', emoji: '🍣'},
    {name: 'soup', emoji: '🍜'},
    {name: 'burger', emoji: '🍔'},
    {name: 'pizza', emoji: '🍕'},
    {name: 'ice cream', emoji: '🍨'},
    {name: 'shrimp', emoji: '🍤'},
    {name: 'chicken', emoji: '🍗'}
  ]
}
