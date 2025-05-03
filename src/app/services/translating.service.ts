import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {TranslatedText} from "../components/shared/data/translated-text.data";
import {bg_BG, en_US, NzI18nService} from "ng-zorro-antd/i18n";

@Injectable({
  providedIn: 'root'
})
export class TranslatingService {
  private langSubject = new BehaviorSubject<keyof TranslatedText>('en');
  public lang$ = this.langSubject.asObservable();

  constructor(private nzI18nService: NzI18nService) {}

  get currentLang(): keyof TranslatedText {
    return this.langSubject.value;
  }


  public setLang(lang: keyof TranslatedText): void {
    this.langSubject.next(lang);
  }

  public switchLocale(lang: string): void {
    switch (lang) {
      case 'bg':
        this.nzI18nService.setLocale(bg_BG);
        break;
      default:
        this.nzI18nService.setLocale(en_US);
        break;
    }
  }
}
