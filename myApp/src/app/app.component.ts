import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/users';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  template: `
      <div class="container mt-3">
        <app-card title="Profile">
          Lorem Ispsum d
        </app-card>
        <app-card title="Form">
          <input class="form-group" type="text" name="">
          <input class="form-group" type="text" name="">
          <input class="form-group" type="text" name="">
          <input class="form-group" type="text" name="">
        </app-card>
        <app-card>
          <div class="row">
            <div class="col">
              <app-card title="1">
                <input class="form-control" type="text" name="">
              </app-card>
            </div>
            <div class="col">
              <app-card title="2">
                Lorem ipsum dolor sit amet, consectetur adip
              </app-card>
            </div>
          </div>
        </app-card>
      </div>
  `,
  styles: [`
  `]
})
export class AppComponent {
}

