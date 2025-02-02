import {Component, HostListener} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})

export class AppHeaderComponent {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('main-en');
    this.translate.use('main-en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
