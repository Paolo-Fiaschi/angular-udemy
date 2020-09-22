import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    <button class="btn btn-primary" (click)="next()">Next</button>
  `,
  styles: [
  ]
})
export class UserDetailComponent implements OnInit {
  user: any;
  id: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router
    ) {
      console.log('crt');

    }
    next() {
      const nextId = this.id + 1;
      this.router.navigateByUrl(`user/${nextId}`)
    }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        this.id = +params.id;
        this.http.get(`https://jsonplaceholder.typicode.com/users/${this.id}`).
        subscribe(res => {
          console.log(res);
          this.user = res;
        });
      })
  }

}
