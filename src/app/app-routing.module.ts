import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  AppMainPageSectionComponent
} from "./components/app-main-section/components/main-page-section/app-main-page-section.component";
import {
  NewsPageSectionComponent
} from "./components/app-main-section/components/news-page-section/news-page-section.component";
import {
  GalleryPageSectionComponent
} from "./components/app-main-section/components/gallery-page-section/gallery-page-section.component";
import {
  AboutUsPageSectionComponent
} from "./components/app-main-section/components/about-us-page-section/about-us-page-section.component";
import {
  ContactsPageSectionComponent
} from "./components/app-main-section/components/contacts-page-section/contacts-page-section.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppMainPageSectionComponent,
  },

  {
    path: 'news',
    pathMatch: 'full',
    component: NewsPageSectionComponent,
  },

  {
    path: 'gallery',
    pathMatch: 'full',
    component: GalleryPageSectionComponent,
  },

  {
    path: 'about-us',
    pathMatch: 'full',
    component: AboutUsPageSectionComponent,
  },

  {
    path: 'contacts',
    pathMatch: 'full',
    component: ContactsPageSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
