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



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TruncatePipe,
    CardComponent,
    TabbarComponent,
    MeteoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [Utility],
  bootstrap: [AppComponent]
})
export class AppModule { }
