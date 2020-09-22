import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/users';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {TabbarItem} from './model/tabbar';
@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
  `]
})
export class AppComponent {
}

