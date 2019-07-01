import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})

export class UpcomingMoviesComponent implements OnInit {
  
  constructor(private moviesService: MoviesService) { }
  
  private movies: Object[];
  // page=1;
  
  ngOnInit(): void {
    this.moviesService.getUpcomingMovies().subscribe(value => this.movies = value.results, error => console.log(error))
  }

  // incrementPage() {
  //   if(this.movies.length>this.page)this.page++;
  //   this.moviesService.getUpcomingMovies(this.page).subscribe(value => this.movies = value.results, error => console.log(error))
  // }

  // decrementPage() {
  //   if(this.page>1)this.page--;
  //   this.moviesService.getUpcomingMovies(this.page).subscribe(res=>this.movies = res.results, error => console.log(error))
  // }
}
