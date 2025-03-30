import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

//Preparation for loading spinner effects


@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  public loading$ = this.loadingSubject.asObservable();

  public show() {
    this.loadingSubject.next(true);
  }

  public hide() {
    this.loadingSubject.next(false);
  }
}
