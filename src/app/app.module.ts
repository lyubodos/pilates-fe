import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {AppFooterComponent} from "./components/app-footer/app-footer.component";
import {AppHeaderComponent} from "./components/app-header/app-header.component";
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
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
import {HttpClient, HttpClientModule, provideHttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {
  ReservationsPageSectionComponent
} from "./components/app-main-section/components/reservations-page-section/reservations-page-section.component";
import {
  PricesPageSectionComponent
} from "./components/app-main-section/components/prices-page-section/prices-page-section.component";
import {NgClass, registerLocaleData} from "@angular/common";
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
import {
  NewsDetailComponent
} from "./components/app-main-section/components/news-page-section/news-detail/news-detail.component";
import {WorkingHoursComponent} from "./components/shared/working-hours/working-hours.component";
import {bg_BG, en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import bg from '@angular/common/locales/bg';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from "ng-zorro-antd/form";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzAutosizeDirective, NzInputDirective} from "ng-zorro-antd/input";
import {NzRadioComponent, NzRadioGroupComponent} from "ng-zorro-antd/radio";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzTimePickerComponent} from "ng-zorro-antd/time-picker";
import {NzTooltipDirective} from "ng-zorro-antd/tooltip";
import {NzCarouselComponent, NzCarouselModule} from "ng-zorro-antd/carousel";

registerLocaleData(en);
registerLocaleData(bg);

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
    NzDatePickerModule,
    NzCarouselModule,
    NzFormDirective,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzColDirective,
    NzInputDirective,
    NzRadioComponent,
    NzButtonComponent,
    NzRowDirective,
    NzRadioGroupComponent,
    NzTimePickerComponent,
    NzTooltipDirective,
    NzAutosizeDirective,
    NzCarouselComponent
  ],
  declarations: [
    AppComponent,
    AppMainPageSectionComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ContactsPageSectionComponent,
    GalleryPageSectionComponent,
    AboutUsPageSectionComponent,
    ReservationsPageSectionComponent,
    PricesPageSectionComponent,
    NewsPageSectionComponent,
    NewsDetailComponent,
    WorkingHoursComponent,
    LoadingSpinnerComponent,
    TermsOfUseComponent,
    GdprComponent,
    GoogleMapComponent
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}

    {provide: NZ_I18N, useValue: [en_US, bg_BG]},
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent,
    AppMainPageSectionComponent,
    TranslateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
