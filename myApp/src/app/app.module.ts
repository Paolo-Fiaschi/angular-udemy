import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';
import { TruncatePipe } from './pipe/truncatePipe';
import { Utility} from './services/utility';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './shared/card/card.component';
import { TabbarComponent } from './shared/tabbar.component';
import { MeteoComponent } from './components/meteo.component';
import { ContactComponent } from './feauters/contact/contact.component';
import { GalleryComponent } from './feauters/gallery/gallery.component';
import { PageNotFoundComponent } from './feauters/page-not-found/page-not-found.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './shared/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './feauters/users/users.component';
import { UserDetailComponent } from './feauters/user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TruncatePipe,
    CardComponent,
    TabbarComponent,
    MeteoComponent,
    ContactComponent,
    GalleryComponent,
    PageNotFoundComponent,
    NavComponent,
    HomeComponent,
    UsersComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [Utility],
  bootstrap: [AppComponent]
})
export class AppModule { }
