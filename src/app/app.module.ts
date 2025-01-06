import {NgModule} from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {AppFooterComponent} from "./components/app-footer/app-footer.component";
import {AppHeaderComponent} from "./components/app-header/app-header.component";
import {AppMainSectionComponent} from "./components/app-main-section/app-main-section.component";
import {
  AppMainPageSectionComponent
} from "./components/app-main-section/components/main-page-section/app-main-page-section.component";


@NgModule({
  imports: [
    AppRoutingModule
  ],
  declarations: [
    AppMainSectionComponent,
    AppMainPageSectionComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  providers: [],
  exports: [
    AppHeaderComponent,
    AppFooterComponent,
    AppMainSectionComponent
  ]
})
export class AppModule {
}
