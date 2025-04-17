import {Component, OnInit} from '@angular/core';
import {GmaInitializerService} from "./services/gma-initializer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private gmaInitializerService: GmaInitializerService) {
  }


  async ngOnInit() {
    await this.gmaInitializerService.initialize();
  }

}
