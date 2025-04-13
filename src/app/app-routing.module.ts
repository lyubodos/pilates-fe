import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

import {
  AppMainPageSectionComponent
} from './components/app-main-section/components/main-page-section/app-main-page-section.component';
import {
  NewsPageSectionComponent
} from './components/app-main-section/components/news-page-section/news-page-section.component';
import {
  GalleryPageSectionComponent
} from './components/app-main-section/components/gallery-page-section/gallery-page-section.component';
import {
  AboutUsPageSectionComponent
} from './components/app-main-section/components/about-us-page-section/about-us-page-section.component';
import {
  ContactsPageSectionComponent
} from './components/app-main-section/components/contacts-page-section/contacts-page-section.component';
import {
  ReservationsPageSectionComponent
} from './components/app-main-section/components/reservations-page-section/reservations-page-section.component';
import {
  PricesPageSectionComponent
} from './components/app-main-section/components/prices-page-section/prices-page-section.component';
import {TermsOfUseComponent} from "./components/app-main-section/components/terms-of-use/terms-of-use.component";
import {GdprComponent} from "./components/app-main-section/components/gdpr/gdpr.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: AppMainPageSectionComponent},
  {path: 'news', pathMatch: 'full', component: NewsPageSectionComponent},
  {path: 'prices', pathMatch: 'full', component: PricesPageSectionComponent},
  {path: 'reservations', pathMatch: 'full', component: ReservationsPageSectionComponent},
  {path: 'gallery', pathMatch: 'full', component: GalleryPageSectionComponent},
  {path: 'about-us', pathMatch: 'full', component: AboutUsPageSectionComponent},
  {path: 'contacts', pathMatch: 'full', component: ContactsPageSectionComponent},
  {path: 'terms', pathMatch: 'full', component: TermsOfUseComponent},
  {path: 'gdpr', pathMatch: 'full', component: GdprComponent},
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 70]
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
