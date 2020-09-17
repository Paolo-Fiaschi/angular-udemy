import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/users';
@Component({
  selector: 'app-root',
  template: `
    <div *ngFor="let user of users; let i = index">
      {{i + 1}}.{{user.name}} - {{user.address.city}}
      <button (click)="delete(user)">Delete</button>
    </div>
  `,
  styles: [`

  `]
})
export class AppComponent {
  users: User[];
  constructor(private http: HttpClient){
    http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => this.users = res);
  }
  delete(user: User){
    // togliendo elemento dalla collezione
    // const index = this.users.findIndex(item => item.id === user.id);
    // this.users.splice(index, 1);

    // non si toglie l'elementoi dalla collezione ma non si fa vedere
    this.users = this.users.filter(item => item.id !== user.id);

  }
}

