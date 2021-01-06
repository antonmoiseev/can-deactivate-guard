import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/">Home</a> |
    <a routerLink="/first">First</a> |
    <a routerLink="/second">Second</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'guards';
}
  