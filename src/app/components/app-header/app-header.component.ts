import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})

export class AppHeaderComponent {
  public menuOpen = false;

  private readonly contactsLink = "/contacts";

  constructor(private translate: TranslateService,
              private router: Router) {
    this.translate.setDefaultLang('main-en');
    this.translate.use('main-en');
  }

  public switchLanguage(event: any) {
    const currentLanguage = event.target.value;
    this.translate.use(currentLanguage);
  }

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  public navigateToContacts(){
      this.router.navigate([this.contactsLink]);
  }
}
