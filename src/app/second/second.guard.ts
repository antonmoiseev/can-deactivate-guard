import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecondGuard implements CanActivate {


  constructor(private readonly router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const messages: string[] = [];
      messages.push('In SecondGuard!');
      const ts = new Date();
      messages.push(`TS: ${ts.getHours()}:${ts.getMinutes()}:${ts.getSeconds()}:${ts.getMilliseconds()}`);
  
      console.warn(messages.join('\n'));
    
      // return of(this.router.createUrlTree(['/second/third'], {  })).pipe(
      //   delay(1000)
      // );

      this.router.navigate(['/second', 'third'], {state: {skipGuards: true}});

      return false;
  }
  
}
