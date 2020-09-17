import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/users';
@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <input class="form-control" type="text" name="" placeholder="Add user..."
            #inputRef
            (keydown.enter)="add(inputRef)"
          >
        </div>
        <div class="col">
          <button class="btn btn-warning" (click)="add(inputRef)">ADD</button>
        </div>
        <div class="col-12">
          <li *ngFor="let user of users">
            {{ user }}
          </li>
        </div>
      </div>

      </div>
  `,
  styles: [`
  `]
})
export class AppComponent {
  add(input: HTMLInputElement){
    this.users.push(input.value);
    input.value = '';
    input.focus();

  }
  users = [
    'Paolo', 'Bene'
  ];
}

