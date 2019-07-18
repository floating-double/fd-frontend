import { SentimentClass } from 'src/app/model/sentimentClass';

export class Sentiment {
    sentimentScore: number;
    sentimentType: string;
    sentimentClass: SentimentClass;
    constructor(sentimentScore: number,
        sentimentType: string,
        sentimentClass: SentimentClass) {
        this.sentimentScore = sentimentScore;
        this.sentimentType = sentimentType;
        this.sentimentClass = sentimentClass;
    }
}