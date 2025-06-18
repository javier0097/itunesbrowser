import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'search-component',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchForm: FormGroup;
  searchText: FormControl;
  resourceType: FormControl;
  typeOptions: String[];

  constructor() {
    this.typeOptions = ['all', 'music', 'musicVideo']
    this.searchText = new FormControl('');
    this.resourceType= new FormControl(this.typeOptions[0]);
    this.searchForm = new FormGroup({
      searchText: this.searchText,
      resourceType: this.resourceType,
    })
  }

  public onSearch(): void {
    console.log(this.searchForm.value);
  }
}
