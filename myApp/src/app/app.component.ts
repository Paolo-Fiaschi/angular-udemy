import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/users';
@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="card">
        <div class="card-header">
          Titolo
        </div>
        <div class="card-body">
          Titolo body
        </div>
      </div>
      <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
    </div>
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

