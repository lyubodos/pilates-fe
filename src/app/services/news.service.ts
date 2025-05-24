import {Injectable} from "@angular/core";
import {NewsItem} from "../components/app-main-section/components/news-page-section/data/news-item.data";
import {NEWS_LIST} from "../data/news-list.data";
import {Observable, of} from "rxjs";

@Injectable({providedIn: "root"})
export class NewsService {
  private newsList: NewsItem[] = NEWS_LIST;

  public getNewsById(id: string): NewsItem | undefined {
    return this.newsList.find(item => item.id === id);
  }

  public getNewsByIdObs(id: string): Observable<NewsItem | null> {
    const newsItem = this.newsList.find(item => item.id === id);

    if (newsItem) {
      return of(newsItem)
    }
    return of(null);
  }

  public getAllNews(): NewsItem[] {
    return this.newsList;
  }

  public getAllNewsObs(): Observable<NewsItem[]> {
    return of(this.newsList);
  }
}
