import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" routerLink="" (click)="isCollapsed = false">Angular</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" (click)="isCollapsed = !isCollapsed" >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div [ngbCollapse]="!isCollapsed" class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" routerLink="home" (click)="isCollapsed = !isCollapsed" routerLinkActive="active">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="contact" (click)="isCollapsed = !isCollapsed"  routerLinkActive="active">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="gallery" (click)="isCollapsed = !isCollapsed" routerLinkActive="active">Gallery</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [
  ]
})
export class NavComponent implements OnInit {

  isCollapsed: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
