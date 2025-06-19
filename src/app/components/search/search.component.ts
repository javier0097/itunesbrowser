import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ItunesElement} from '../../interfaces/itunes-element';
import {SearchParams} from '../../interfaces/search-params';

@Component({
  selector: 'search-component',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() search:EventEmitter<SearchParams> = new EventEmitter();
  searchForm: FormGroup;
  searchText: FormControl;
  resourceType: FormControl;
  typeOptions: String[];

  constructor() {
    this.typeOptions = ['musicVideo', 'movie', 'podcast'];
    this.searchText = new FormControl('');
    this.resourceType= new FormControl(this.typeOptions[0]);
    this.searchForm = new FormGroup({
      searchText: this.searchText,
      resourceType: this.resourceType,
    });
  }

  public onSearch(): void {
    this.search.emit(this.searchForm.value);
  }
}
