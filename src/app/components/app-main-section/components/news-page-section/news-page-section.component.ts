import { Component } from '@angular/core';

interface NewsItem {
  title: string;
  date: string;
  content: string;
  image: string;
}


@Component({
  selector: 'app-news-page-section',
  templateUrl: './news-page-section.component.html',
  styleUrl: './news-page-section.component.scss'
})
export class NewsPageSectionComponent {

  newsList: NewsItem[] = [
    {
      title: "New HIIT Classes Starting!",
      date: "March 30, 2025",
      content: "Join our new High-Intensity Interval Training (HIIT) classes every Monday and Thursday!",
      image: "assets/images/news/pialtes_weights.jpg"
    },
    {
      title: "Special Discount for Members!",
      date: "April 5, 2025",
      content: "We are offering a 20% discount on all annual memberships. Don't miss out!",
      image: "assets/images/news/discount.jpg"
    },
    {
      title: "Yoga & Meditation Sessions Added",
      date: "April 10, 2025",
      content: "Relax and rejuvenate with our new Yoga & Meditation sessions every weekend.",
      image: "assets/images/news/yoga.jpg"
    }
  ];
}
