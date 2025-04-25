import {Injectable} from "@angular/core";
import {NewsItem} from "../components/app-main-section/components/news-page-section/data/news-item.data";
import {NEWS_LIST} from "../data/news-list.data";

@Injectable({providedIn: "root"})
export class NewsService {
  private newsList: NewsItem[] = NEWS_LIST;

  public getNewsById(id: string): NewsItem | undefined {
    return this.newsList.find(item => item.id === id);
  }

  public getAllNews(): NewsItem[] {
    return this.newsList;
  }
}
