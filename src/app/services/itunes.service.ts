import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItunesResponse} from '../interfaces/itunes-response';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://itunes.apple.com/search?'
  }

  public search(searchText: string, type: string): Observable<ItunesResponse> {
    return this.http.get<ItunesResponse>(`${this.baseUrl}term=${this.prepareTermSearch(searchText)}&entity=${type}`)
  }

  private prepareTermSearch(searchText: string): string {
    return searchText.replace(' ', '+');
  }
}
