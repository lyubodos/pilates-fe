import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  AppMainPageSectionComponent
} from "./components/app-main-section/components/main-page-section/app-main-page-section.component";
import {
  NewsPageSectionComponent
} from "./components/app-main-section/components/news-page-section/news-page-section.component";

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
