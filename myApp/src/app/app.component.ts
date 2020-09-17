import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/users';
@Component({
  selector: 'app-root',
  template: `
    <li
      [ngClass]="{
        'male': user.gender === 'M',
        'female': user.gender === 'F'
      }"
      *ngFor="let user of users">
      {{ user.name }}
    </li>
  `,
  styles: [`
    .male {background-color: blue; color: white}
    .female {background-color: pink; color: black}
  `]
})
export class AppComponent {
  users = [
    {id: 1, name: 'Paolo', gender: 'M'},
    {id: 2, name: 'Giorgia', gender: 'F'},
    {id: 3, name: 'Mattia', gender: 'M'},
    {id: 4, name: 'Bene', gender: 'F'},
  ];
}

