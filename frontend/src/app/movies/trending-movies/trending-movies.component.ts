import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss']
})
export class TrendingMoviesComponent implements OnInit {
  trendingByDay: object[]
  trendingByWeek: object[]

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.loadTrendingMovies();
  }

  loadTrendingMovies():void{
      this.moviesService.getTrendingMoviesByDay().subscribe(value => {
          this.trendingByDay = value.results;
          console.log(this.trendingByDay)
      }, console.log);

      this.moviesService.getTrendingMoviesByWeek().subscribe(value => {
        this.trendingByWeek = value.results;
    }, console.log)
  }

}
