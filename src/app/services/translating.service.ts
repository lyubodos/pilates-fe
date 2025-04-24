import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {TranslatedText} from "../components/shared/data/translated-text.data";

@Injectable({
  providedIn: 'root'
})
export class TranslatingService {
  private langSubject = new BehaviorSubject<keyof TranslatedText>('en');
  public lang$ = this.langSubject.asObservable();

  get currentLang(): keyof TranslatedText {
    return this.langSubject.value;
  }


  public setLang(lang: keyof TranslatedText): void {
    this.langSubject.next(lang);
  }
}
