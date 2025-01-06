import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppHeaderComponent} from "./components/app-header/app-header.component";
import {AppFooterComponent} from "./components/app-footer/app-footer.component";
import {AppModule} from "./app.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pilates-fe';
}
