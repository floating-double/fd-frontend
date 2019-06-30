export class Sentiment {
    sentimentScore: number;
    sentimentType: string;
    veryPositive: number;
    positive: number;
    neutral: number;
    negative: number;
    veryNegative: number;
    constructor(sentimentScore: number,
        sentimentType: string,
        veryPositive: number,
        positive: number,
        neutral: number,
        negative: number,
        veryNegative: number) {
        this.sentimentScore = sentimentScore;
        this.sentimentType = sentimentType;
        this.veryPositive = veryPositive;
        this.positive = positive;
        this.negative = negative;
        this.veryNegative = veryNegative;
    }
}