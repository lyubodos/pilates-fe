import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {
  ReservationsPageSectionComponent
} from "./components/app-main-section/components/reservations-page-section/reservations-page-section.component";
import {
  PricesPageSectionComponent
} from "./components/app-main-section/components/prices-page-section/prices-page-section.component";
import {NgClass} from "@angular/common";
import {LoadingSpinnerComponent} from "./components/shared/loading-spinner/loading-spinner.component";
import {
  NewsPageSectionComponent
} from "./components/app-main-section/components/news-page-section/news-page-section.component";
import {NgIconsModule} from "@ng-icons/core";
import {iconsStashData} from "./data/icons-stash.data";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GoogleMapComponent} from "./components/shared/google-map/google-map.component";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {TermsOfUseComponent} from "./components/app-main-section/components/terms-of-use/terms-of-use.component";
import {GdprComponent} from "./components/app-main-section/components/gdpr/gdpr.component";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgClass,
    NgIconsModule.withIcons(iconsStashData),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    AppMainSectionComponent,
    AppMainPageSectionComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ContactsPageSectionComponent,
    GalleryPageSectionComponent,
    AboutUsPageSectionComponent,
    ReservationsPageSectionComponent,
    PricesPageSectionComponent,
    NewsPageSectionComponent,
    LoadingSpinnerComponent,
    TermsOfUseComponent,
    GdprComponent,
    GoogleMapComponent
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent,
    AppMainSectionComponent,
    TranslateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
