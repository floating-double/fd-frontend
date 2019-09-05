import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../service/news-service';
import { NewsInput } from '../model/newsInput';
import { Article } from '../model/article';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    article: Article;
    textInput: string;
    enableResult: boolean;
    articles: Article[] = [];
    displayedColumns: string[] = ['title', 'source', 'author', 'url'];
    dataSource = new MatTableDataSource(this.articles);
    public showSpinner:boolean = false;
    public showArticles: boolean = false;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(private service: NewsService) { }

    ngOnInit() {
        this.textInput = "";
    }

    public getRecentNewsArticles = (text: string): Promise<Article[]> => {
        const that = this;
        return new Promise(function (resolve) {
            that.service.getRecentNews(new NewsInput(text)).subscribe(
                data => {
                    console.log(data);
                    if (!data) {
                        console.log("no response from service");
                    } else {
                        that.enableResult = true;
                        // console.log("response " + data);
                        let recent_news_articles = JSON.parse(JSON.stringify(data));
                        for (let entry of recent_news_articles) {
                            console.log(entry.title);
                            //TODO: Handle edge cases
                            let title = entry.title;
                            let source = entry.source;
                            let author = entry.author;
                            let description = entry.description;
                            let url = entry.url;
                            let urlToImage = entry.urlToImage;
                            let publishedAt = entry.publishedAt;
                            let content = entry.content;
                            let article = new Article(title, source, author, description, url, urlToImage, publishedAt, content);
                            that.articles.push(article);
                        }
                        resolve(that.articles);
                    }
                },
                error => {
                    console.log(error);
                }
            );
        });
    }

    onSubmitClick(){
        const that = this;
        that.showArticles = false;
        that.articles.splice(0,that.articles.length)
        console.log(">>>>>>>>>>>>>>>>>>>>textInput>>>>>>>>>>>>>>>>>>>");
        console.log(that.textInput);
        that.showLoadingSpinner();
        that.getRecentNewsArticles(that.textInput).then((result) => {
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
            console.log(result);
            that.hideLoadingSpinner();
            if(that.articles !== null && that.articles !== undefined){
                if(that.articles.length > 0){
                    that.showArticles = true;
                }
            }
        }

        )
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
    }

    showLoadingSpinner(){
        this.showSpinner = true;
    }

    hideLoadingSpinner(){
        this.showSpinner = false;
    }
}
