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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mi sit amet ex hendrerit lacinia vel ac nibh. Curabitur nec vulputate massa, nec accumsan nunc. Fusce nec metus non ante vestibulum hendrerit vitae sit amet leo. Nunc id odio cursus, tempus sem sed, molestie odio. Phasellus vulputate nulla nec urna semper condimentum. Phasellus tempus tortor at magna feugiat pretium. Aliquam varius ex quis orci cursus lacinia. Aenean quam velit, pretium at tincidunt ut, sodales ac neque. Integer sapien nisi, convallis a lectus a, lacinia maximus justo. Nulla lacus augue, scelerisque hendrerit odio non, sagittis pretium leo. Etiam et accumsan lectus. Proin feugiat magna vitae maximus finibus. Nam sagittis bibendum est, id cursus quam blandit id. Vestibulum ultricies semper diam, at ornare sapien imperdiet et. Proin id sapien leo.",
      image: "assets/images/news/pialtes_weights.jpg"
    },
    {
      id: '2',
      title: "Special Discount for Members!",
      date: "April 5, 2025",
      content: "We are offering a 20% discount on all annual memberships. Don't miss out!",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mi sit amet ex hendrerit lacinia vel ac nibh. Curabitur nec vulputate massa, nec accumsan nunc. Fusce nec metus non ante vestibulum hendrerit vitae sit amet leo. Nunc id odio cursus, tempus sem sed, molestie odio. Phasellus vulputate nulla nec urna semper condimentum. Phasellus tempus tortor at magna feugiat pretium. Aliquam varius ex quis orci cursus lacinia. Aenean quam velit, pretium at tincidunt ut, sodales ac neque. Integer sapien nisi, convallis a lectus a, lacinia maximus justo. Nulla lacus augue, scelerisque hendrerit odio non, sagittis pretium leo. Etiam et accumsan lectus. Proin feugiat magna vitae maximus finibus. Nam sagittis bibendum est, id cursus quam blandit id. Vestibulum ultricies semper diam, at ornare sapien imperdiet et. Proin id sapien leo.",
      image: "assets/images/news/discount.jpg"
    },
    {
      id: '3',
      title: "Yoga & Meditation Sessions Added",
      date: "April 10, 2025",
      content: "Relax and rejuvenate with our new Yoga & Meditation sessions every weekend.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mi sit amet ex hendrerit lacinia vel ac nibh. Curabitur nec vulputate massa, nec accumsan nunc. Fusce nec metus non ante vestibulum hendrerit vitae sit amet leo. Nunc id odio cursus, tempus sem sed, molestie odio. Phasellus vulputate nulla nec urna semper condimentum. Phasellus tempus tortor at magna feugiat pretium. Aliquam varius ex quis orci cursus lacinia. Aenean quam velit, pretium at tincidunt ut, sodales ac neque. Integer sapien nisi, convallis a lectus a, lacinia maximus justo. Nulla lacus augue, scelerisque hendrerit odio non, sagittis pretium leo. Etiam et accumsan lectus. Proin feugiat magna vitae maximus finibus. Nam sagittis bibendum est, id cursus quam blandit id. Vestibulum ultricies semper diam, at ornare sapien imperdiet et. Proin id sapien leo.",
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
