import { Component, OnInit } from '@angular/core';
import { Text } from '@angular/compiler';
import { SentimentAnalysisService } from '../service/sentiment-analysis-service';
import { Input } from '../model/input';
import {Sentiment} from '../model/sentiment';
@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {
  sentimentScore: number;
  sentimentType: string;
  veryPositive: number;
  positive: number;
  neutral: number;
  negative: number;
  veryNegative: number;
  sentiment: Sentiment;
  textInput: string;

  constructor(private service: SentimentAnalysisService) { }

  ngOnInit() {
    this.textInput = "";
  }

  async getSentimentAnalysis(text: Input) {
    this.service.postInputText(text).subscribe(
      data => {
        if (!(<any>data)._body) {
          console.log("no response from service");
        } else {
          console.log("response " + data);
          this.sentiment = (<any>data).json();
          this.sentimentScore = this.sentiment.sentimentScore;
          this.sentimentType = this.sentiment.sentimentType;
          this.veryPositive = this.sentiment.veryPositive;
          this.positive = this.sentiment.positive;
          this.neutral = this.sentiment.neutral;
          this.negative = this.sentiment.negative;
          this.veryNegative = this.sentiment.veryNegative;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
