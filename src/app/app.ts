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
  elements: ItunesElement[][];
  pageNumber: number;
  constructor(private itunesService: ItunesService) {
    this.elements = [];
    this.pageNumber = 0;
  }

  public onSearch(params: SearchParams): void {
    this.itunesService.search(params.searchText, params.resourceType)
      .subscribe((response) => {
        this.generatePages(response.results);
      });
  }

  public selectPage(pageNumber: number): void {
    this.pageNumber = pageNumber;
  }

  private generatePages(elements: ItunesElement[]): void {
    for (let i = 0; i < elements.length; i = i + 10) {
        this.elements.push(elements.slice(i, i+10));
    }
  }
}
