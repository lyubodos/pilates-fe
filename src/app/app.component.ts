import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppHeaderComponent} from "./components/app-header/app-header.component";
import {AppFooterComponent} from "./components/app-footer/app-footer.component";
import {AppModule} from "./app.module";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('main-en');
    this.translate.use('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
