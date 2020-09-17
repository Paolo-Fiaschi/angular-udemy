import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/users';
@Component({
  selector: 'app-root',
  template: `
    <li
    [style.backgroundColor]="user.gender === 'M' ? 'blue':'pink'"
    [style.color]="user.gender === 'M' ? 'white':'black'"
    [style.fontSize.px]="user.age"
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
    {id: 1, name: 'Paolo', age: 32, gender: 'M'},
    {id: 2, name: 'Giorgia', age: 23, gender: 'F'},
    {id: 3, name: 'Mattia', age: 12, gender: 'M'},
    {id: 4, name: 'Bene', age: 23, gender: 'F'},
  ];
}

