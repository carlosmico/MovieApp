import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import {HomeComponent} from './home/home.component'
import {PopularMoviesComponent} from './popular-movies/popular-movies.component'
import {MovieComponent} from './movie/movie.component'
import {TopRateComponent} from './top-rate/top-rate.component'
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'popular', component: PopularMoviesComponent},
  {path: 'topRated', component: TopRateComponent},
  {path: 'upcoming', component: UpcomingMoviesComponent},
  {path: 'popular/movie/:id', component: MovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
