import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SearchParams} from '../../interfaces/search-params';

@Component({
  selector: 'search-component',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() searchSubmitted:EventEmitter<SearchParams> = new EventEmitter();
  searchForm: FormGroup;
  typeOptions: string[];

  constructor() {
    this.typeOptions = ['musicVideo', 'movie', 'podcast'];
    this.searchForm = new FormGroup({
      searchText: new FormControl('', [Validators.required, Validators.pattern(/\S+/)]),
      resourceType: new FormControl(this.typeOptions[0])
    });
  }

  public onSearch(): void {
    this.searchSubmitted.emit(this.searchForm.value);
  }
}
