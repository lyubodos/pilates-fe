import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {NewsService} from '../services/news.service';

@Injectable({
  providedIn: 'root'
})
export class NewsExistsGuard implements CanActivate {

  constructor(private newsService: NewsService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.paramMap.get('id')!;
    return this.newsService.getNewsByIdObs(id).pipe(
      map(news => {
        if (news) {
          return true;
        } else {
          this.router.navigate(['/not-found']);
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['/not-found']);
        return of(false);
      })
    );
  }
}
