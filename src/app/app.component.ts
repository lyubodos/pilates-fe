import {Component, OnInit} from '@angular/core';
import {AppModule} from "./app.module";
import {CommonModule} from "@angular/common";
import {GmaInitializerService} from "./services/gma-initializer.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule, CommonModule],
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
