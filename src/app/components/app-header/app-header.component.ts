import {Component, HostListener} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})

export class AppHeaderComponent {

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header?.classList.add('shrink');
    } else {
      header?.classList.remove('shrink');
    }
  }

  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('main-en');
    this.translate.use('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
