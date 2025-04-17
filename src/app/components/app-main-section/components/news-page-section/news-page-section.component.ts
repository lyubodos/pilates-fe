import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../../../services/news.service";
import {NewsItem} from "./data/news-item.data";
import {Router} from "@angular/router";


@Component({
  selector: 'app-news-page-section',
  templateUrl: './news-page-section.component.html',
  styleUrl: './news-page-section.component.scss'
})
export class NewsPageSectionComponent implements OnInit {
  public newsList: NewsItem[] = [];

  constructor(private newsService: NewsService, private router: Router) {
  }

  public ngOnInit(): void {
    this.newsList = this.newsService.getAllNews();
  }

  public openNewsInformation(newsId: string) {
    this.router.navigate([`/news/${newsId}`]);
  }

}
