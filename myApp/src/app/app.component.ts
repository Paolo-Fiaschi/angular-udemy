import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="!users; else success">LOADING</div>
    <ng-template #success><pre>{{users | json}}</pre></ng-template>
  `,
  styles: [`

  `]
})
export class AppComponent {
  users: any[];
  constructor(private http: HttpClient){
    setTimeout(() => {
      http.get<any>('https://jsonplaceholder.typicode.com/users')
        .subscribe(res => this.users = res);
      }, 2000);
  }
}

