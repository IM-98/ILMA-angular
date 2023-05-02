import { Component, Input } from '@angular/core';
import { Card } from '../Card';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.scss']
})
export class DivCardComponent {

  @Input() tab!: Card[]


  @Input() isRow!: boolean
}
