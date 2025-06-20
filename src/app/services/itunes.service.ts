import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItunesResponse} from '../interfaces/itunes-response';
import {SearchParams} from '../interfaces/search-params';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://itunes.apple.com/search?'
  }

  public search(params: SearchParams): Observable<ItunesResponse> {
    return this.http.get<ItunesResponse>(`${this.baseUrl}term=${this.prepareTermSearch(params.searchText)}&entity=${params.resourceType}`)
  }

  private prepareTermSearch(searchText: string): string {
    return searchText.replace(' ', '+');
  }
}
