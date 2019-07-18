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
  enableResult: boolean;

  constructor(private service: SentimentAnalysisService) { }

  ngOnInit() {
    this.textInput = "";
  }

getSentimentAnalysis(text: string) {
    this.service.postInputText(new Input(text)).subscribe(
      data => {
        console.log(data);
        if (!data) {
          console.log("no response from service");
        } else {
          this.enableResult = true;
          console.log("response " + data);
          this.sentiment = JSON.parse(JSON.stringify(data));
          this.sentimentScore = this.sentiment.sentimentScore;
          this.sentimentType = this.sentiment.sentimentType;
          this.veryPositive = this.sentiment.sentimentClass.veryPositive;
          this.positive = this.sentiment.sentimentClass.positive;
          this.neutral = this.sentiment.sentimentClass.neutral;
          this.negative = this.sentiment.sentimentClass.negative;
          this.veryNegative = this.sentiment.sentimentClass.veryNegative;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  disableResult(){
this.enableResult = false;
  }

  resetValues(){
    this.sentimentScore = 0;
    this.sentimentType = "";
    this.veryPositive = 0;
    this.positive = 0;
    this.neutral = 0;
    this.negative = 0;
    this.veryNegative = 0;
  }

}
