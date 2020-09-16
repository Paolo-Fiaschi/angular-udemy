import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="toggle()">Toggle</button>
    <h1 *ngIf="visible">Hello World!!</h1>
    <li
    [hidden]="!visible"
    *ngFor="let user of users">
      {{user}}
    </li>
  `,
  styles: [`

  `]
})
export class AppComponent {
  visible = true;
  users = ['Mattia', 'Paolo', 'Bene'];
  toggle() {
    this.visible = !this.visible;
  }
}
