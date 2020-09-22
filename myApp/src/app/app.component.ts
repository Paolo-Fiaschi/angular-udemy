import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/users';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {TabbarItem} from './model/tabbar';
@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <app-tabbar
    (tabClick)="openDetails($event)"
    [items]="users"
    >

    </app-tabbar>
    <div class="card" *ngIf="activeUsers">
      <div class="card-header">
        {{activeUsers.name}}
      </div>
      <div class="card-body">
        {{activeUsers.desc}} from
        {{activeUsers.country}}
        <img  class="img-thumbnail" src="https://www.bandiere-mondo.it/data/flags/w580/{{activeUsers.flag}}.webp">
      </div>
    </div>
    </div>
  `,
  styles: [`
  `]
})
export class AppComponent {
  // countries: TabbarItem[] = [
  //   {id: 1, name: 'Italy'},
  //   {id: 2, name: 'Germany'},
  //   {id: 3, name: 'Spain'}
  // ];
  activeUsers;
  users: TabbarItem[] = [
    {id: 1, name: 'Paolo', desc: 'mi chiamo Paolo', country: 'Italy', flag: 'it'},
    {id: 2, name: 'Luca', desc: 'mi chiamo Luca', country: 'Germany', flag: 'de'},
    {id: 3, name: 'Anna', country: 'Spain', flag: 'es'}
  ];

  // doSomething(country: TabbarItem){
  //   window.open('https://it.wikipedia.org/wiki/' + country.name)
  // }
  openDetails(user:TabbarItem[]){
    console.log(user);
    this.activeUsers = user;

  }
}

