import { Component } from '@angular/core';

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
export class AboutUsPageSectionComponent {

  public aboutUsCardsList: AboutUsCard[] = [
    {
      title: 'Veneta Vasileva',
      age: '26',
      image: 'assets/images/gallery/IMG_0239.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur dui interdum, tincidunt ipsum in, condimentum urna. Aenean ut cursus lacus, quis vestibulum diam. Nam consectetur sapien sit amet tristique semper. Praesent in malesuada quam, quis congue quam. Pellentesque at justo sed lacus vehicula rutrum eu sed libero. Duis at arcu orci. Nam efficitur mollis tempus.'
    },
    {
      title: 'Geri Nikolova',
      age: '24',
      image: 'assets/images/about-us/IMG_0139_cropped.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur dui interdum, tincidunt ipsum in, condimentum urna. Aenean ut cursus lacus, quis vestibulum diam. Nam consectetur sapien sit amet tristique semper. Praesent in malesuada quam, quis congue quam. Pellentesque at justo sed lacus vehicula rutrum eu sed libero. Duis at arcu orci. Nam efficitur mollis tempus.'
    }
  ]

}
