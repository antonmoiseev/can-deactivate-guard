import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-third',
  template: `
    <p>
      third works!
    </p>
  `,
  styles: [
  ]
})
export class ThirdComponent implements OnInit {

  constructor(router: Router, location: Location, route: ActivatedRoute) {
    // location.replaceState('/second/third', undefined, {})
   }

  ngOnInit(): void {
  }

}
