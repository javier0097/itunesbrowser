import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItunesResponse} from '../interfaces/itunes-response';
import {SearchParams} from '../interfaces/search-params';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {
  private readonly baseUrl = 'https://itunes.apple.com/search?'

  constructor(private http: HttpClient) {}

  public search(params: SearchParams): Observable<ItunesResponse> {
    if (!params.searchText || !params.resourceType) {
      throw new Error('Incomplete search parameters');
    }
    return this.http.get<ItunesResponse>(`${this.baseUrl}term=${this.prepareTermSearch(params.searchText)}&entity=${params.resourceType}`)
  }

  private prepareTermSearch(searchText: string): string {
    return encodeURIComponent(searchText.trim());
  }
}
