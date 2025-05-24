import {Component, OnInit} from '@angular/core';
import {GmaInitializerService} from "./services/gma-initializer.service";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {GtaService} from "./services/gta.service";

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private readonly G_KEY = 'G-XJ196F16DD';

  constructor(private gmaInitializerService: GmaInitializerService, private router: Router, private gtaService: GtaService) {
  }


  async ngOnInit() {
    await this.gmaInitializerService.initialize();
    this.gtaService.loadAnalytics(this.G_KEY);
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe(event => {
        gtag('config', this.G_KEY, {
          page_path: event.urlAfterRedirects
        });
      });
  }
}
