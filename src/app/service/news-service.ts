import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { NewsInput } from '../model/newsInput';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiURL: string = '';

  constructor(private httpClient: HttpClient) {}

  public getRecentNews(text: NewsInput) {
    const _headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(text);
    console.log(JSON.stringify(text));
    return this.httpClient.post(`${this.apiURL}`, text, {headers: _headers});
  }
}