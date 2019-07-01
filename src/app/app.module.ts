import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movies/movie/movie.component';
import { PopularMoviesComponent } from './movies/popular-movies/popular-movies.component';
import { UpcomingMoviesComponent } from './movies/upcoming-movies/upcoming-movies.component';
import { TopRateComponent } from './movies/top-rate/top-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    MovieComponent,
    PopularMoviesComponent,
    UpcomingMoviesComponent,
    TopRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
