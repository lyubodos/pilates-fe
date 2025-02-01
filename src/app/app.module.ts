import {NgModule} from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {AppFooterComponent} from "./components/app-footer/app-footer.component";
import {AppHeaderComponent} from "./components/app-header/app-header.component";
import {AppMainSectionComponent} from "./components/app-main-section/app-main-section.component";
import {
  AppMainPageSectionComponent
} from "./components/app-main-section/components/main-page-section/app-main-page-section.component";
import {
  AboutUsPageSectionComponent
} from "./components/app-main-section/components/about-us-page-section/about-us-page-section.component";
import {
  ContactsPageSectionComponent
} from "./components/app-main-section/components/contacts-page-section/contacts-page-section.component";
import {
  GalleryPageSectionComponent
} from "./components/app-main-section/components/gallery-page-section/gallery-page-section.component";


@NgModule({
  imports: [
    AppRoutingModule
  ],
  declarations: [
    AppMainSectionComponent,
    AppMainPageSectionComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ContactsPageSectionComponent,
    GalleryPageSectionComponent,
    AboutUsPageSectionComponent
  ],
  providers: [],
  exports: [
    AppHeaderComponent,
    AppFooterComponent,
    AppMainSectionComponent,
  ]
})
export class AppModule {
}
