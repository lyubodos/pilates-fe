import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

interface AboutUsCard {
  title: string;
  age: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-about-us-page-section',
  templateUrl: './about-us-page-section.component.html',
  styleUrl: './about-us-page-section.component.scss'
})
export class AboutUsPageSectionComponent implements OnInit{

  public aboutUsCardsList: AboutUsCard[] = [];

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.loadInfoCards();

    this.translateService.onLangChange.subscribe(() => {
      this.loadInfoCards();
    });
  }

  private loadInfoCards() {
    this.translateService.get('MAIN.ABOUT_US.ABOUT_US_CARDS').subscribe((faqList: any[]) => {
      this.aboutUsCardsList = faqList;
    });
  }
}
