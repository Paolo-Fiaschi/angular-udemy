import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meteo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>{{city.value}}</h1>
    <div *ngIf="weather">
      <p>Temp: {{weather.main.temp}}°</p>
      <p>Umidità: {{weather.main.humidity}}%</p>
      <!-- <pre>{{weather | json}}</pre> -->
    </div>
    {{printMe()}}
    `,
  styles: [
  ]
})
export class MeteoComponent implements OnChanges {

  @Input() city: any;
  @Input() units: string;
  weather: any;
  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef
    ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    const city = changes.city;
    if (city) {
      this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.currentValue.value}&units=metric&appid=0863e6dfc23fe823e449370a78f1287b`).subscribe(res => {
        this.weather = res;
        this.cd.markForCheck();
      });
    }

  }
  printMe(){
    console.log('render');

  }

}
