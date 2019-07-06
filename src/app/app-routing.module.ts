import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import {HomeComponent} from './home/home.component'
import {DiscoverMoviesComponent} from './movies/discover-movies/discover-movies.component'
import {PopularMoviesComponent} from './movies/popular-movies/popular-movies.component'
import {MovieComponent} from './movies/movie/movie.component'
import {TopRateComponent} from './movies/top-rate/top-rate.component'
import { UpcomingMoviesComponent } from './movies/upcoming-movies/upcoming-movies.component';
import {RandomComponent} from './movies/random/random.component';
import {ListsComponent} from './movies/lists/lists.component';
import { Notfound404Component} from './notfound404/notfound404.component';
import {ListDetailsComponent} from './movies/lists/list-details/list-details.component'
import {RegisterComponent} from './users/register/register.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'discover', component: DiscoverMoviesComponent},
  {path: 'popular', component: PopularMoviesComponent},
  {path: 'topRated', component: TopRateComponent},
  {path: 'upcoming', component: UpcomingMoviesComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'random', component: RandomComponent},
  {path: 'list/:id', component: ListDetailsComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: Notfound404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
