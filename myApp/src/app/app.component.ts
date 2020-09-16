import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button [disabled]="url" (click)="load()">ADD</button>
    <button [disabled]="!url" (click)="onLoad()">REMOVE</button>
    <img *ngIf="url" [src]="url">
    <div [innerHTML]="url"></div>
  `,
  styles: [`

  `]
})
export class AppComponent {
  url: string;
  load(): void{
    this.url = 'https://angular.io/assets/images/logos/angular/angular.png';
  }
  onLoad(): void{
    this.url = null;
  }
}
