import { Component, Input } from '@angular/core';
import { Pokemon } from '../Pokemon';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() item?: Pokemon;
  toggleUpdateForm: boolean = false;

  displayUpdateForm() {
    this.toggleUpdateForm = !this.toggleUpdateForm
  }

}
