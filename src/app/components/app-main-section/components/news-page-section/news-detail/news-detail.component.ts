import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../../../../../services/news.service";
import {TranslatedText} from "../data/news-item.data";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss'
})
export class NewsDetailComponent implements OnInit, OnDestroy {
  private newsId!: string;
  public lang: keyof TranslatedText = 'en';
  private langSub!: Subscription;

  public newsData: any;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsId = this.route.snapshot.paramMap.get('id')!;
    this.newsData = this.newsService.getNewsById(this.newsId); // example service

    this.langSub = this.newsService.lang$.subscribe((lang) => {
      this.lang = lang;
    });
  }

  public ngOnDestroy() {
    this.langSub.unsubscribe();
  }

}
