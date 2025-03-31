import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page-section',
  templateUrl: './app-main-page-section.component.html',
  styleUrl: './app-main-page-section.component.scss'
})
export class AppMainPageSectionComponent {
  private readonly contactsLink = "/contacts";

  constructor(private router: Router) {
  }


  public navigateToContacts() {

    this.router.navigate([this.contactsLink]);
  }
}
