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

  constructor(private itunesService: ItunesService) {
    this.elements = [];
  }

  public onSearch(params: SearchParams): void {
    this.itunesService.search(params.searchText, params.resourceType)
      .subscribe((response) => {
        this.elements = response.results;
      });
  }
}
