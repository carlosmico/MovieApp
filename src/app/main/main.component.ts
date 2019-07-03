import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service'
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  movies: Object[] = []

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.loadTopMovies();
  }

  loadTopMovies():any{
    this.moviesService.getTopRatedMovies(1).subscribe(value => {
      for (let i = 0; i < 5; i++) {
        this.movies.push(value.results[i]);
      }
      console.log(this.movies)
    }, err => console.log(err))
  }

}
