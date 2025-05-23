import {Component, OnInit} from '@angular/core';
import {GmaInitializerService} from "./services/gma-initializer.service";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private gmaInitializerService: GmaInitializerService, private router: Router) {
  }


  async ngOnInit() {
    await this.gmaInitializerService.initialize();
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe(event => {
        gtag('config', 'G-XJ196F16DD', {
          page_path: event.urlAfterRedirects
        });
      });
  }

}
