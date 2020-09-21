import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
      <p [style.color]="color">Ciao {{name}}</p>

  `,
  styles: [`

  `]
})
export class HelloComponent implements OnInit {

  @Input() name: string;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
