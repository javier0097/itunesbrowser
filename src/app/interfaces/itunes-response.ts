import {ItunesElement} from './itunes-element';

export interface ItunesResponse {
  resultCount: number;
  results: ItunesElement[];
}
