import { Component } from '@angular/core';
import {SearchParams} from './interfaces/search-params';
import {ItunesService} from './services/itunes.service';
import {ItunesElement} from './interfaces/itunes-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  elements: ItunesElement[];
  noResults: boolean;
  constructor(private itunesService: ItunesService) {
    this.elements = [];
    this.noResults = false;
  }

  public onSearch(params: SearchParams): void {
    this.itunesService.search(params)
      .subscribe((response) => {
        if (response.resultCount) {
          this.elements = response.results;
          this.noResults = false;
        } else {
          this.noResults = true;
          this.elements = [];
        }
      });
  }
}
