import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  template: `
    <!-- <pre>{{users | json}}</pre> -->
    <li *ngFor="let user of users">
      {{user.id}} - {{user.name}}
    </li>
  `,
  styles: [`

  `]
})
export class AppComponent {
  users: User[];
  constructor(private http: HttpClient) {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => {
        this.users = res;
      });
  }
}

interface User{
  id: number;
  name: string;
}
