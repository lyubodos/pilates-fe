import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})

export class AppHeaderComponent {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('main-en');
    this.translate.use('main-en');
  }

  public switchLanguage(event: any) {
    const currentLanguage = event.target.value;
    this.translate.use(currentLanguage);
  }
}
