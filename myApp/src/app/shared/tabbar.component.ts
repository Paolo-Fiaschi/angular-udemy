import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {TabbarItem} from '../model/tabbar';

@Component({
  selector: 'app-tabbar',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item"
      *ngFor="let item of items"
      (click)="tabHandler(item)"
      >
        <a class="nav-link" href="#"
        [ngClass]="{'active': item.id === active?.id}"
        >
          {{item.name}}
        </a>
      </li>
    </ul>  `,
  styles: [
  ]
})
export class TabbarComponent implements OnInit {
  @Input() items: TabbarItem[];
  @Output() tabClick: EventEmitter<any> = new EventEmitter<any>();
  active: TabbarItem;
  tabHandler(item: TabbarItem){
    this.active = item;
    this.tabClick.emit(item);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
