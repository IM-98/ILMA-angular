import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../../models/Pokemon';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  @Input() item?: Pokemon;
  @Output() modifiedPokemon = new EventEmitter<Pokemon>();
  toggleUpdateForm: boolean = false;

  displayUpdateForm() {
    this.toggleUpdateForm = !this.toggleUpdateForm
  }

  form = new FormGroup({
    HP: new FormControl(),
    attack: new FormControl(),
    defense: new FormControl(),
    special: new FormControl(),
    speed: new FormControl(),
  })

  modifyItem() {
    if(this.item){
      this.item.stats.HP = this.form.value.HP;
      this.item.stats.attack = this.form.value.attack;
      this.item.stats.defense = this.form.value.defense;
      this.item.stats.special_attack = this.form.value.special;
      this.item.stats.speed = this.form.value.speed;
    }
    this.form.reset();
    this.modifiedPokemon.emit(this.item);
    this.toggleUpdateForm = false;

  }
}
