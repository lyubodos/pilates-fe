import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ImagesLoaderService} from "../../../../services/images-loader.service";

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
export class AboutUsPageSectionComponent implements OnInit {

  public aboutUsCardsList: AboutUsCard[] = [];
  public isLoading = false;
  public imagesLoaded = false;


  constructor(private translateService: TranslateService, private imagesLoaderService: ImagesLoaderService) {
  }

  ngOnInit() {
    this.loadInfoCards();
    this.isLoading = true;
    this.imagesLoaderService.preloadImages(this.aboutUsCardsList)
      .then(() => {
      this.imagesLoaded = true;
      this.isLoading = false;
    }).catch(() => {
      console.warn('Some images failed to preload.');
      this.imagesLoaded = true;
    });

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
