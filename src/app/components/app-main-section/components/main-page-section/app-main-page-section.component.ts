import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {TranslatingService} from "../../../../services/translating.service";
import {Subscription} from "rxjs";
import {TestimonialsText} from "../../../shared/data/testimonials-text.data";
import {TranslatedText} from "../../../shared/data/translated-text.data";

interface FaqStruct {
  question: string;
  answer: string;
  isOpen: boolean
};



@Component({
  selector: 'app-main-page-section',
  templateUrl: './app-main-page-section.component.html',
  styleUrl: './app-main-page-section.component.scss'
})
export class AppMainPageSectionComponent implements OnInit {
  public lang: keyof TranslatedText = 'en';
  private langSub!: Subscription;

  public testimonials: TestimonialsText[]  = [
    {
      name: {
        en: 'Minko Cvetanov',
        bg: "Минко Цветанов"
      },
      image: 'assets/images/testimonials/Screenshot 2025-04-24 at 22.36.14.png',
      info: {
        en: "It is worth it! You won't regret it!",
        bg: "Заслужава си! Няма да съжалявате!"
      },
      role: {
        en: 'Body instructor/Gym trainer',
        bg: "Фитнес инструктор"
      },
      message: {
        en: "Most of the time, as someone who loves to work out, I spend it in the gym. After visiting ReformFlow Studio, my focus shifted not only to fitness but also to the Pilates Reformer, which helps with perfect recovery and further improvement of physical form.",
        bg: "През по-голямата част от времето, като човек, обичащ да тренира, прекарвам във фитнес залата. След като посетих ReformFlow Studio моят поглед се фокусира не само върху фитнеса, но и пилатес реформъра, който спомага за перфектното възстановяване и доусъвършенстване на физическата форма."
      }
    },
    {
      name: {
        en: 'Martina Karakoleva',
        bg: "Мартина Караколева"
      },
      image: 'assets/images/testimonials/IMG_2189.jpeg',
      info: {
        en: "I can't wait to visit again!",
        bg: "Нямам търпение за следващата ми тренировка!"
      },
      role: {
        en: 'Marketing expert',
        bg: "Маркетингов експерт"
      },
      message: {
        en: "The instructors are exceptional professionals, working with great precision and paying attention to their clients with every single movement. I was very satisfied and can't wait for my next workout.",
        bg: "Инструкторите са изключителни професионалисти, работещи с огромна прецизност и обръщат внимание на своите клиенти при всяко едно движение. Останах много доволна и нямам търпение за следващата ми тренировка. "
      }
    },
    {
      name: {
        en: 'Daniela Mezeklieva',
        bg: "Даниела Мезеклиева"
      },
      image: 'assets/images/testimonials/anonymous.jpeg',
      info: {
        en: 'These trainings improved my life!',
        bg: "Тези тренировки подобриха живота ми!"
      },
      role: {
        en: 'Receptionist',
        bg: "Рецепционист"
      },
      message: {
        en: "ReformFlow showed me exercising can be both intensive and fun. Professional team, driven to provide the best care for your body. I am always looking forward to my sessions.",
        bg: "ReformFlow ми показа как упражненията могат да бъдат и натоварващи, и завабни. Професионален екип, който е посветен да предостави най-добрата гриьа за тялото ви. Винаги очаквам с нетърпение следващите сесии."
      }
    }
  ];

  private readonly contactsLink = "/contacts";
  private readonly INTERVAL = 5000;

  public faqs: FaqStruct[] = [];
  public currentIndex = 0;
  public interval: any;


  public imgs = [
    'assets/images/IMG_9979.jpeg',
    'assets/images/IMG_9983.jpeg',
    'assets/images/gallery/IMG_0313.jpeg',
  ];


  constructor(private router: Router, private route: ActivatedRoute, private translateService: TranslateService, private translatingService: TranslatingService) {

  }

  public ngOnInit() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, this.INTERVAL);

    this.langSub = this.translatingService.lang$.subscribe((lang) => {
      this.lang = lang;
    });

    this.loadFaqs();

    this.translateService.onLangChange.subscribe(() => {
      this.loadFaqs();
    });
  }

  public ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
         this.scrollToWithOffset(fragment, 100);
        }, 0);
      }
    })
  }

  public toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  public nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.imgs.length;
  }

  public navigateToContacts() {
    this.router.navigate([this.contactsLink]);
  }

  private loadFaqs() {
    this.translateService.get('MAIN.HOME.FAQ.FAQ_LIST').subscribe((faqList: any[]) => {
      this.faqs = faqList.map(faq => ({
        question: faq.question,
        answer: faq.answer,
        isOpen: false
      }));
    });
  }

  private scrollToWithOffset(id: string, offset: number = 100) {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
