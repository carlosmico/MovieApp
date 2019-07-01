import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service'


@Component({
  selector: 'app-latestmovies',
  templateUrl: './latestmovies.component.html',
  styleUrls: ['./latestmovies.component.scss']
})
export class LatestmoviesComponent implements OnInit {

  movies: object[];
  constructor(private MoviesService: MoviesService) { }


  ngOnInit() {
    this.MoviesService.getlatestMovies().subscribe(value => {
      this.movies = value.results;
    }, err => console.log(err));
  }


}
