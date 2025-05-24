import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from "../../../../services/news.service";
import {NewsItem} from "./data/news-item.data";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {TranslatingService} from "../../../../services/translating.service";
import {TranslatedText} from "../../../shared/data/translated-text.data";
import {ImagesLoaderService} from "../../../../services/images-loader.service";


@Component({
  selector: 'app-news-page-section',
  templateUrl: './news-page-section.component.html',
  styleUrl: './news-page-section.component.scss'
})
export class NewsPageSectionComponent implements OnInit, OnDestroy {
  public newsList: NewsItem[] = [];
  public lang: keyof TranslatedText = 'bg';
  public isLoading = false;
  public imagesLoaded = false;

  private langSub!: Subscription;


  constructor(private newsService: NewsService, private router: Router, private translatingService: TranslatingService, private imagesLoaderService: ImagesLoaderService) {
  }

  public ngOnInit(): void {
    this.newsList = this.newsService.getAllNews();
    this.isLoading = true;
    this.imagesLoaderService.preloadImages(this.newsList).then(() => {
      this.imagesLoaded = true;
      this.isLoading = false;
    }).catch(() => {
      console.warn('Some images failed to preload.');
      this.imagesLoaded = true;
    });

    this.langSub = this.translatingService.lang$.subscribe((lang) => {
      this.lang = lang;
    });
  }

  public ngOnDestroy() {
    this.langSub.unsubscribe();
  }

  public openNewsInformation(newsId: string) {
    this.router.navigate([`/news/${newsId}`]);
  }
}
