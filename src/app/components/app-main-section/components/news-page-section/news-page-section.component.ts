import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from "../../../../services/news.service";
import {NewsItem, TranslatedText} from "./data/news-item.data";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-news-page-section',
  templateUrl: './news-page-section.component.html',
  styleUrl: './news-page-section.component.scss'
})
export class NewsPageSectionComponent implements OnInit, OnDestroy {
  public newsList: NewsItem[] = [];
  public lang: keyof TranslatedText = 'en';
  private langSub!: Subscription;


  constructor(private newsService: NewsService, private router: Router) {
  }

  public ngOnInit(): void {
    this.newsList = this.newsService.getAllNews();

    this.langSub = this.newsService.lang$.subscribe((lang) => {
      this.lang = lang;
    });
  }

  public ngOnDestroy() {
    this.langSub.unsubscribe();
  }

  public openNewsInformation(newsId: string) {
    this.router.navigate([`/news/${newsId}`]);
  }

  public getTranslatedValue(obj: TranslatedText): string {
    return obj[this.lang as keyof TranslatedText];
  }
}
