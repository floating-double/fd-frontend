import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Input } from '../model/input';

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {
  apiURL: string = 'http://www.server.com/api/';

  constructor(private httpClient: HttpClient) {}

  public postInputText(text: Input) {
    const _headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(text);
    console.log(JSON.stringify(text));
    return this.httpClient.post(`${this.apiURL}/text`, text, {headers: _headers});
  }
}