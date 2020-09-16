import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 (click)="clickHandler($event)">Hello World!!</h1>
    <input type="text" value="" (keydown.enter)="inputHandler($event)">
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'myApp';
  clickHandler(event:MouseEvent) {
    console.log('click', event);
  }
  inputHandler(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    console.log('press', target.value);

  }
}
