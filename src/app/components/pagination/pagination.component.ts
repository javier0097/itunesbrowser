import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'pagination-component',
  standalone: false,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  numPages: number;
  pages: number[];
  selectedPage: number;
  @Input('numPages') set setNumPages(numPages: number) {
    this.numPages = numPages;
    this.pages = Array.from({length: numPages}, (_, i) => i+1);
  }
  @Output() onPageChange: EventEmitter<number>;

  constructor() {
    this.numPages = 0;
    this.pages = [];
    this.selectedPage = 1;
    this.onPageChange = new EventEmitter<number>();
  }

  public selectPage(numPage: number) {
    this.selectedPage = numPage;
    this.onPageChange.emit(numPage-1);
  }
}
