import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>I PIPES</h1>
   <p>{{today | date: 'dd/MM/yyyy'}}</p>
   <p>{{money | currency: '€'}}</p>
   <p>lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
     {{bitcoins | number: '1.2-4'}}</p>
   <pre>{{user | json}}</pre>

   <h2>Pipe Truncate</h2>
   <li *ngFor="let art of article">
     <h3>{{art.titolo}}</h3>
     <i>{{art.autore}}</i>
     <p>{{art.testo | truncate: 100}}</p>
   </li>
  `,
  styles: [`

  `]
})
export class AppComponent {
  article = [
    {
      id: 1,
      titolo: 'Titolo',
      autore: 'Paolo',
      testo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, nesciunt consequuntur. Inventore nam amet dignissimos delectus, optio alias velit voluptatem enim sint earum, hic explicabo placeat nisi beatae, ex nulla.'
    }
  ];
  today = Date.now();
  money = 1200;
  bitcoins = 0.1452587;
  user = {id: 1, name: 'Paolo'};
}
