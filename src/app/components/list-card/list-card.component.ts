import {Component, Input} from '@angular/core';
import {ItunesElement} from '../../interfaces/itunes-element';

@Component({
  selector: 'list-card-component',
  standalone: false,
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})
export class ListCardComponent {
  @Input('elements') set setElements(elements: ItunesElement[]) {
    this.elements = [];
    if (elements && elements.length > 0) {
      this.elements = elements;
      this.sortElements()
      this.pages = Array.from({length: this.pagedElements.length}, (_, i) => i+1);
      console.log(this.pagedElements);
    }
  }

  elements: ItunesElement[];
  pagedElements: ItunesElement[][];
  pages: number[];
  selectedPage: number;
  descendingSelected: boolean;

  constructor() {
    this.elements = [];
    this.pages = [];
    this.selectedPage = 1;
    this.pagedElements = [];
    this.descendingSelected = false;
  }

  public selectPage(numPage: number) {
    this.selectedPage = numPage;
  }

  public sortElements(descending: boolean = true): void {
    this.elements.sort((a, b) =>
      descending
        ? a.trackName.localeCompare(b.trackName)
        : b.trackName.localeCompare(a.trackName)
    );
    this.generatePages();
    this.descendingSelected = descending;
    this.selectedPage = 1;
  }

  public changeOrder(descending: boolean = true): void {
    if (this.descendingSelected !== descending) {
      this.sortElements(descending);
    }
  }

  private generatePages(): void {
    this.pagedElements = []
    for (let i = 0; i < this.elements.length; i = i + 10) {
      this.pagedElements.push(this.elements.slice(i, i+10));
    }
  }
}
