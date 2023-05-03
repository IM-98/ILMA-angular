import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../Pokemon';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.scss']
})
export class DivCardComponent {

  @Input() tab: Pokemon[] = []

  @Output() deletePokemon = new EventEmitter<number>();
  @Output() displayPokemon = new EventEmitter<number>();
  
  deleteItem(id: number) {
    console.log("deleteItem", id)
    this.deletePokemon.emit(id);
  }

  displayItem(id: number) {
    console.log("displayItem", id)
    this.displayPokemon.emit(id);
  }
}
