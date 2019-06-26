import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasOnlineComponent } from './peliculas-online/peliculas-online.component';
import { IncomingComponent } from './incoming/incoming.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasOnlineComponent,
    IncomingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
