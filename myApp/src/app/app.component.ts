import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/users';
@Component({
  selector: 'app-root',
  template: `
    <li
      [class.male]="user.gender === 'M'"
      [class.female]="user.gender === 'F'"
      [class.me]="user.name === 'Paolo'"
      *ngFor="let user of users">
      {{ user.name }}
    </li>
  `,
  styles: [`
    .male {background-color: black; color: white}
    .female {background-color: pink; color: black}
    .me{font-size: 30px}
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

