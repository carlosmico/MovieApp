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
import { LatestmoviesComponent } from './movies/latestmovies/latestmovies.component';
import { MainComponent } from './main/main.component';
import { RandomComponent } from './movies/random/random.component';
import { DiscoverMoviesComponent } from './movies/discover-movies/discover-movies.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { ListsComponent } from './movies/lists/lists.component';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ListDetailsComponent } from './movies/lists/list-details/list-details.component';
import { RegisterComponent } from './users/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    MovieComponent,
    PopularMoviesComponent,
    UpcomingMoviesComponent,
    TopRateComponent,
    LatestmoviesComponent,
    MainComponent,
    RandomComponent,
    DiscoverMoviesComponent,
    Notfound404Component,
    ListsComponent,
    BuyTicketsComponent,
    SearchBarComponent,
    ListDetailsComponent,
    RegisterComponent
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
