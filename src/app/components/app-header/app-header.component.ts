import {Component, HostListener, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})

export class AppHeaderComponent implements OnInit {
  public menuOpen = false;

  public currentLang: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const screenWidth = (event.target as Window).innerWidth;

    if (screenWidth > 768) {
      this.menuOpen = false;
    }
  }

  private readonly contactsLink = "/contacts";

  constructor(private translate: TranslateService,
              private router: Router) {
  }

  public ngOnInit() {
    this.translate.setDefaultLang('main-en');
    this.translate.use('main-en');

    this.currentLang = this.translate.currentLang;
  }

  public switchLanguageToBG() {
    this.translate.use('main-bg');
    this.currentLang = 'main-bg';
  }

  public switchLanguageToEN() {
    this.translate.use('main-en');
    this.currentLang = 'main-en';
  }

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  public closeMenu() {
    this.menuOpen = false;
  }

  //Sample navigation for contacts section for future use
  public navigateToContacts() {
    this.router.navigate([this.contactsLink]);
  }

  //Sample language switch  for future use
  private switchLanguage(event: any) {
    const currentLanguage = event.target.value;
    this.translate.use(currentLanguage);
  }
}
