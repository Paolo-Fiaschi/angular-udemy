import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/users';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <pre>{{f.dirty}}</pre>
      <pre>{{f.valid}}</pre>
      <pre>{{f.touched}}</pre>
      <form #f ="ngForm" (submit)="add(f)">
        <input class="form-control"
        #inputName ="ngModel"
        type="text"
        name="name"
        placeholder="Add user..."
        minlength="3"
        [ngClass]="{'error': inputName.invalid && inputName.touched}"
        [ngModel]="user?.name"
        required
        >
        <input class="form-control"
        #inputAge ="ngModel"
        type="number"
        name="age"
        placeholder="Add age user..."
        [ngClass]="{'error': inputAge.invalid && inputAge.dirty}"
        [ngModel]="user?.age"
        required
        >
        <button [disabled]="f.invalid" type="submit" class="btn btn-primary">
          Add
        </button>
      </form>
      <li
      *ngFor="let user of users"
      (click)="setActive(user)"
      [style.backgroundColor]= "user.color"
      >
        {{user.name}} - {{user.age}} anni
      </li>
    </div>
  `,
  styles: [`
    .error {
      border: 1px solid red;
    }
  `]
})
export class AppComponent {
  user: User;
  users = [];

  add(form: NgForm){
    this.users.push(form.value);
    form.reset();
  }
}

