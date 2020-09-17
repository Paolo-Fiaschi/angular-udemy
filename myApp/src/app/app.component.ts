import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/users';
@Component({
  selector: 'app-root',
  template: `
    <button (click)="goto('one')">ONE</button>
    <button (click)="goto('two')">TWO</button>
    <button (click)="goto('three')">THREE</button>
    <hr>
    <div [ngSwitch]= "section">
      <div *ngSwitchDefault>Lorem 1</div>
      <div *ngSwitchCase="'two'">Lorem 2</div>
      <div *ngSwitchCase="'three'">Lorem 3</div>
    </div>
  `,
  styles: [`

  `]
})
export class AppComponent {
  section: string;
  goto(value: string){
    this.section = value;
  }
}

