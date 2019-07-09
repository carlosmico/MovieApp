import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service'


@Component({
  selector: 'app-latestmovies',
  templateUrl: './latestmovies.component.html',
  styleUrls: ['./latestmovies.component.scss']
})
export class LatestmoviesComponent implements OnInit {

  movie:Object;
  constructor(private MoviesService: MoviesService) { }


  ngOnInit() {
    this.MoviesService.getlatestMovies().subscribe(value => {
      console.log(value);
      
      this.movie = value;
    }, err => console.log(err));
  }


}
