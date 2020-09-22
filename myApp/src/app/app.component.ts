import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/users';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {TabbarItem} from './model/tabbar';
@Component({
  selector: 'app-root',
  template: `
    <app-meteo [city]="city"></app-meteo>
    <form #f='ngForm' (submit)="changeCity(f)">
      <input class="form-control" type="text" name="city" [ngModel]="city.value">
      <button type="submit">CHANGE</button>
    </form>
  `,
  styles: [`
  `]
})
export class AppComponent {
  // city = 'Londra';
  city = {value: 'Londra'};
  changeCity(form: NgForm): void{
    // this.city.value = form.value.city;
    this.city = {value: form.value.city};
  }
}

