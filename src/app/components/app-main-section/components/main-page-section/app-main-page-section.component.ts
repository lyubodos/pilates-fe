import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

interface FaqStruct { question: string;
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
  public faqs: FaqStruct[] = [];


  constructor(private router: Router, private translateService: TranslateService) {

  }


  public ngOnInit() {
    this.loadFaqs();

    this.translateService.onLangChange.subscribe(() => {
      this.loadFaqs();
    });
  }

  public toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
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
}
