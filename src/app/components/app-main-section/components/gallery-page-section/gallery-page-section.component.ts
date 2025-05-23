import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery-page-section',
  templateUrl: './gallery-page-section.component.html',
  styleUrl: './gallery-page-section.component.scss'
})
export class GalleryPageSectionComponent implements OnInit {
  public images: string[] = [
    'assets/images/IMG_9979.jpeg',
    'assets/images/IMG_9983.jpeg',
    'assets/images/gallery/IMG_0313.jpeg',
    'assets/images/gallery/IMG_1075.jpeg',
    'assets/images/home/IMG_0025.jpeg',
    'assets/images/home/IMG_0030.jpeg',
    'assets/images/gallery/IMG_0094.jpeg',
    'assets/images/gallery/IMG_0115.jpeg',
    'assets/images/gallery/IMG_0139.jpeg',
    'assets/images/gallery/IMG_0192.jpeg',
    'assets/images/gallery/IMG_0200.jpeg',
    'assets/images/gallery/IMG_1062.jpeg',
    'assets/images/gallery/IMG_1072.jpeg',
    'assets/images/gallery/IMG_1073.jpeg',
    'assets/images/gallery/IMG_1076.jpeg',
  ];
  public imagesLoaded = false;
  public currentIndex = 0;
  public showModal = false;
  public isLoading = false;


  ngOnInit() {
    this.preloadImages().then(() => {
      this.imagesLoaded = true;
      this.isLoading = false;
    }).catch(() => {
      console.warn('Some images failed to preload.');
      this.imagesLoaded = true;
    });
  }

  public openModal(index: number) {
    this.currentIndex = index;
    this.showModal = true;
  }

  public closeModal() {
    this.showModal = false;
  }

  public next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  public prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  private preloadImages() {
    this.isLoading = true;
    const preloadPromises = this.images.map((image) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = image;
      });
    });

    return Promise.all(preloadPromises);
  }
}
