import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {
  movies: Object[]

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getUpcomingMovies().subscribe(value => {
      this.movies = value.results;
    }, err=> console.log(err));
  }

}
