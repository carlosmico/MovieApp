import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  topMovies: Object[]

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.loadTopMovies();
  }

  loadTopMovies():any{
    this.moviesService.getTopRatedMovies(1).subscribe(value => {
      this.topMovies = value.results;
    }, err => console.log(err))
  }

}
