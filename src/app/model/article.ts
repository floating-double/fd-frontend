export class Article {
    title: string;
    source: string;
    author: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    constructor(title: string,
        source: string,
        author: string,
        description: string,
        url: string,
        urlToImage: string,
        publishedAt: string,
        content: string) {
        this.title = title;
        this.source = source;
        this.author = author;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.publishedAt = publishedAt;
        this.content = content;
    }
}