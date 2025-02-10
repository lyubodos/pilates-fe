import {Component} from '@angular/core';
import {TranslationService} from "../../services/languages.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})

export class AppHeaderComponent {
  selectedLanguage: string = 'main-en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('main-en');
    this.translate.use('main-en');
  }

  public switchLanguage(event: any) {
    const currentLanguage = event.target.value;
    this.translate.use(currentLanguage);

    //TODO Console line implemented only for test purposes, delete before merging into dev
    console.log("Language changed to:", currentLanguage);
  }
}
