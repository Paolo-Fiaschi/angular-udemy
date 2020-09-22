import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-detail',
  template: `
    <div *ngIf="user">
      <h1>
        {{user.name}}
      </h1>
      <h2>{{user.email}}</h2>
    </div>
  `,
  styles: [
  ]
})
export class UserDetailComponent implements OnInit {
  user: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
    ) {

    }

    ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params.id;
    this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).
    subscribe(res => {
      console.log(res);
      this.user = res;

    });
  }

}
