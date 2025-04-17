import {Injectable} from "@angular/core";
import {NewsItem} from "../components/app-main-section/components/news-page-section/data/news-item.data";

@Injectable({providedIn: "root"})
export class NewsService {
  private newsList: NewsItem[] = [
    {
      id: '1',
      title: "New HIIT Classes Starting!",
      date: "March 30, 2025",
      content: "Join our new High-Intensity Interval Training (HIIT) classes every Monday and Thursday!",
      image: "assets/images/news/pialtes_weights.jpg"
    },
    {
      id: '2',
      title: "Special Discount for Members!",
      date: "April 5, 2025",
      content: "We are offering a 20% discount on all annual memberships. Don't miss out!",
      image: "assets/images/news/discount.jpg"
    },
    {
      id: '3',
      title: "Yoga & Meditation Sessions Added",
      date: "April 10, 2025",
      content: "Relax and rejuvenate with our new Yoga & Meditation sessions every weekend.",
      image: "assets/images/news/yoga.jpg"
    }
  ];


  public getNewsById(id: string): NewsItem | undefined {
    return this.newsList.find(item => item.id === id);
  }

  public getAllNews(): NewsItem[] {
    return this.newsList;
  }
}
