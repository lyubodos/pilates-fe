import {Injectable} from "@angular/core";
import {
    NewsItem} from "../components/app-main-section/components/news-page-section/data/news-item.data";
import {TranslateService} from "@ngx-translate/core";
import {TranslationService} from "./languages.service";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: "root"})
export class NewsService {
    private newsList: NewsItem[] = [
        {
            id: '1',
            title: {
                en: "Healthy eating – a path to energy, balance, and good health",
                bg: "Здравословното хранене – път към енергия, баланс и добро здраве"
            },
            date: {
                en: "March 30, 2025",
                bg: "Март 30, 2025",
            },
            content: {
                en: "Healthy eating and dietary methods",
                bg: "Здравословно хранене и методи на хранене"
            },
            description: {
                en: "In today's world, filled with stress, constant motion, and a fast pace, eating often becomes something mechanical – something we do on the go, without thinking about what we are actually putting into our bodies. However, healthy eating is not a diet, deprivation, or a short-term trend. It is a long-term lifestyle that keeps both the body and mind in optimal shape.",
                bg: "В съвременния свят, изпълнен със стрес, динамика и бързи темпове, храненето често се превръща в нещо механично – нещо, което правим „на крак“, без да се замисляме какво реално слагаме в тялото си. Здравословното хранене обаче не е диета, лишения или краткосрочна мода. То е дългосрочен начин на живот, който поддържа тялото и ума в оптимална форма."
            },
            image: "assets/images/news/eat.png"
        }
        // {
        //   id: '2',
        //   title: "Special Discount for Members!",
        //   date: "April 5, 2025",
        //   content: "We are offering a 20% discount on all annual memberships. Don't miss out!",
        //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mi sit amet ex hendrerit lacinia vel ac nibh. Curabitur nec vulputate massa, nec accumsan nunc. Fusce nec metus non ante vestibulum hendrerit vitae sit amet leo. Nunc id odio cursus, tempus sem sed, molestie odio. Phasellus vulputate nulla nec urna semper condimentum. Phasellus tempus tortor at magna feugiat pretium. Aliquam varius ex quis orci cursus lacinia. Aenean quam velit, pretium at tincidunt ut, sodales ac neque. Integer sapien nisi, convallis a lectus a, lacinia maximus justo. Nulla lacus augue, scelerisque hendrerit odio non, sagittis pretium leo. Etiam et accumsan lectus. Proin feugiat magna vitae maximus finibus. Nam sagittis bibendum est, id cursus quam blandit id. Vestibulum ultricies semper diam, at ornare sapien imperdiet et. Proin id sapien leo.",
        //   image: "assets/images/news/discount.jpg"
        // },
        // {
        //   id: '3',
        //   title: "Yoga & Meditation Sessions Added",
        //   date: "April 10, 2025",
        //   content: "Relax and rejuvenate with our new Yoga & Meditation sessions every weekend.",
        //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mi sit amet ex hendrerit lacinia vel ac nibh. Curabitur nec vulputate massa, nec accumsan nunc. Fusce nec metus non ante vestibulum hendrerit vitae sit amet leo. Nunc id odio cursus, tempus sem sed, molestie odio. Phasellus vulputate nulla nec urna semper condimentum. Phasellus tempus tortor at magna feugiat pretium. Aliquam varius ex quis orci cursus lacinia. Aenean quam velit, pretium at tincidunt ut, sodales ac neque. Integer sapien nisi, convallis a lectus a, lacinia maximus justo. Nulla lacus augue, scelerisque hendrerit odio non, sagittis pretium leo. Etiam et accumsan lectus. Proin feugiat magna vitae maximus finibus. Nam sagittis bibendum est, id cursus quam blandit id. Vestibulum ultricies semper diam, at ornare sapien imperdiet et. Proin id sapien leo.",
        //   image: "assets/images/news/yoga.jpg"
        // }
    ];

    public getNewsById(id: string): NewsItem | undefined {
        return this.newsList.find(item => item.id === id);
    }

    public getAllNews(): NewsItem[] {
        return this.newsList;
    }
}
