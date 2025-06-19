import {Component, Input} from '@angular/core';
import {ItunesElement} from '../../interfaces/itunes-element';

@Component({
  selector: 'list-card-component',
  standalone: false,
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})
export class ListCardComponent {
  @Input() public elements: ItunesElement[];

  constructor() {
    this.elements = [];
  }
}
