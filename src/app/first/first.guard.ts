import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstGuard implements CanDeactivate<unknown> {
constructor(private router: Router, private location: Location) {}

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const nav = this.router.getCurrentNavigation();
      // console.log(JSON.stringify(this.router.getCurrentNavigation(), null, 2));

      if (!nav?.extras.state?.skipGuards) {
        const messages: string[] = [];
        messages.push('In FirstComponent\'s CanDeactivate guard');
        // messages.push(`Component unique ID: ${component.uniqueID}`);

        const ts = new Date();
        messages.push(`TS: ${ts.getHours()}:${ts.getMinutes()}:${ts.getSeconds()}:${ts.getMilliseconds()}`);
    
        console.warn(messages.join('\n'));
      } else {
        this.location.replaceState(nextState?.url!, undefined, {})
      }

      return true;
  }
}
