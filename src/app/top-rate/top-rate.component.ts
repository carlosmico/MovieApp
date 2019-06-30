import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-top-rate',
  templateUrl: './top-rate.component.html',
  styleUrls: ['./top-rate.component.scss']
})
export class TopRateComponent implements OnInit {

  movies: object[];
  constructor(private MoviesService: MoviesService) { }

   
  ngOnInit() {
<<<<<<< HEAD
    this.MoviesService.getTopRatedMovies().subscribe(value => {
      this.movies = value.results;
    }, err=> console.log(err));
=======
    // this.MoviesService.getTopRateMovies().subscribe(value => {
    //   this.movies = value.results;
    // }, err=> console.log(err));
>>>>>>> origin/master
  }

}
