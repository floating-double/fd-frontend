export class SentimentClass {
    veryPositive: number;
    positive: number;
    neutral: number;
    negative: number;
    veryNegative: number;
    constructor(veryPositive: number,
        positive: number,
        neutral: number,
        negative: number,
        veryNegative: number) {
        this.veryPositive = veryPositive;
        this.positive = positive;
        this.negative = negative;
        this.veryNegative = veryNegative;
    }
}