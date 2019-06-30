import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Input } from '../model/input';

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {
  apiURL: string = 'http://www.server.com/api/';

  constructor(private httpClient: HttpClient) {}

  public postInputText(text: Input) {
    return this.httpClient.post(`${this.apiURL}/text/`, text);
  }
}