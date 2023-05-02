import { Component } from '@angular/core';
import { Card } from './Card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'Toto';
  cardListRow: Card[] = [
    {text: 'This is a card'},
    {text: 'This is a card'},
    {text: 'This is a card'},
  ];
  cardListColumn = [
    {text: 'This is a card'},
    {text: 'This is a card'},
    {text: 'This is a card'},
  ]

  maxColumn: number = this.cardListColumn.length;
  maxRow: number = this.cardListRow.length;
}
