import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../../../../../services/news.service";


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss'
})
export class NewsDetailComponent implements OnInit {
  private newsId!: string;

  public newsData: any;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsId = this.route.snapshot.paramMap.get('id')!;
    this.newsData = this.newsService.getNewsById(this.newsId); // example service
  }

}
