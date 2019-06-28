import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import {HomeComponent} from './home/home.component'
import {PopularMoviesComponent} from './popular-movies/popular-movies.component'
import {MovieComponent} from './movie/movie.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'popular', component: PopularMoviesComponent},
  {path: 'topRated', component: MovieComponent},
  {path: 'upcoming', component: MovieComponent},
  {path: 'movie', component: MovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
