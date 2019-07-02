import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service"

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})

export class PopularMoviesComponent implements OnInit {
  actualPage: number = 1
  maxPage: number
  movies: Object[]

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies(): void {
    this.moviesService.getPopularMovies(this.actualPage).subscribe(value => {
      this.movies = value.results;
      this.maxPage = value.total_pages;
    }, console.log);
  }

  firstPage(): void {
    this.actualPage = 1;
    this.loadMovies()
  }

  previousPage(): void {
    if (this.actualPage > 1) {
      this.actualPage--;
      this.loadMovies()
    }
  }

  nextPage(): void {
    if (this.actualPage < this.maxPage) {
      this.actualPage++;
      this.loadMovies();
    }
  }

  lastPage(): void {
    this.actualPage = this.maxPage;
    this.loadMovies()
  }

}

