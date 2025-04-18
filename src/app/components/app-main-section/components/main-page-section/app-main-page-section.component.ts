import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

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


  constructor(private router: Router, private route: ActivatedRoute, private translateService: TranslateService) {

  }

  public ngOnInit() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, this.INTERVAL);

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
