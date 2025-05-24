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
  public isLoading = false;
  public imagesLoaded = false;


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

    this.preloadImages().then(() => {
      this.imagesLoaded = true;
      this.isLoading = false;
    }).catch(() => {
      console.warn('Some images failed to preload.');
      this.imagesLoaded = true;
    });
  }

  private preloadImages() {
    this.isLoading = true;
    const preloadPromises = this.aboutUsCardsList.map((card) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = card.image;
      });
    });

    return Promise.all(preloadPromises);
  }
}
