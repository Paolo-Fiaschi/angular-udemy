import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  template: `
    <li *ngFor="let user of users" [routerLink]="['/user', user.id]">
      {{user.name}}
    </li>
  `,
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor(
    private http: HttpClient
    ) {}
  users: any;

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').
    subscribe(res => {
      console.log(res);
      this.users = res;

    });
  }

}
