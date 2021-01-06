import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <p>
      first works!
    </p>
    <a routerLink="/">Home</a>
    <a routerLink="/second">Second</a>
  `,
  styles: [
  ]
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
