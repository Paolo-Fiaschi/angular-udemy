import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p>
      Ciao
    </p>
  `,
  styles: [`

  `]
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
