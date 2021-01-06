import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <p>
      second works!
    </p>
    <a routerLink="/">Home</a>
    <a routerLink="/first">First</a>
  `,
  styles: [
  ]
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
