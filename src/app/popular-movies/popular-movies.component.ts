import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  movies: Object[]

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe(value => {
      this.movies = value.results;
    }, err=> console.log(err));
  }

}
