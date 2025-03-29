import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery-page-section',
  templateUrl: './gallery-page-section.component.html',
  styleUrl: './gallery-page-section.component.scss'
})
export class GalleryPageSectionComponent implements OnInit, OnDestroy {
  public currentIndex = 0;
  public interval: any;

  public images = [
    'assets/images/IMG_9881.jpeg',
    'assets/images/IMG_9917.jpeg',
    'assets/images/IMG_9979.jpeg',
    'assets/images/IMG_9983.jpeg'
  ];


  public ngOnInit() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  public ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  public nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  public prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

}
