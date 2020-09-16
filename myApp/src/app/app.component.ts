import { Component } from '@angular/core';
import { Users } from './model/users';

@Component({
  selector: 'app-root',
  template: `
  <li *ngFor="let user of users">
    {{user.id}} - {{ user.name}} - {{user.age}}
  </li>
  `,
  styles: [`

  `]
})
export class AppComponent {
  label:boolean;
  constructor(){
    this.label = true;
  }
  users: Users[] = [
    {id: 1, name: 'Paolo', age: 32},
    {id: 2, name: 'Bene', age: 32},
    {id: 3, name: 'Luca', age: 32},
  ];
}
