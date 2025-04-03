import {Component, OnDestroy, OnInit} from '@angular/core';
import {TimeInterval} from "rxjs/internal/operators/timeInterval";

@Component({
  selector: 'app-gallery-page-section',
  templateUrl: './gallery-page-section.component.html',
  styleUrl: './gallery-page-section.component.scss'
})
export class GalleryPageSectionComponent implements OnInit, OnDestroy {
  public currentIndex = 0;
  public interval: any;

  private readonly INTERVAL = 4000;

  public images = [
    'assets/images/IMG_9979.jpeg',
    'assets/images/IMG_9983.jpeg',
    'assets/images/gallery/IMG_0313.jpeg',
    'assets/images/home/IMG_0024.jpeg',
    'assets/images/home/IMG_0025.jpeg',
    'assets/images/home/IMG_0030.jpeg',
    'assets/images/gallery/IMG_0094.jpeg',
    'assets/images/gallery/IMG_0115.jpeg',
    'assets/images/gallery/IMG_0139.jpeg',
    'assets/images/gallery/IMG_0192.jpeg',
    'assets/images/gallery/IMG_0200.jpeg',
    'assets/images/gallery/IMG_0239.jpeg',
  ];


  public ngOnInit() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, this.INTERVAL);
  }

  public ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  public resetSlideInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  public nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.resetSlideInterval();
  }

  public prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.resetSlideInterval();
  }

  private intervalGenerator() {
    setInterval(() => {
      this.nextSlide();
    }, this.INTERVAL);
  }

}
