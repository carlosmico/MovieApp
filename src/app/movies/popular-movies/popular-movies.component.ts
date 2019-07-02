import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../movies.service"

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})

export class PopularMoviesComponent implements OnInit {
  actualPage:number = 1
  maxPage:number
  genres:Object[]
  movies: Object[]
  filter:boolean = false
  filterGenreId:number

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.loadGenres();
    this.loadMovies();
  }

  loadMovies():void{
    if(this.filter){
      this.moviesService.getMoviesByGenre(this.actualPage, this.filterGenreId).subscribe(value => {
        this.movies = value.results;
        this.maxPage = value.total_pages;
      }, console.log);
    }else{
      this.moviesService.getPopularMovies(this.actualPage).subscribe(value=> {
        this.movies = value.results;
        this.maxPage = value.total_pages;
      }, console.log);
    }
  }

  firstPage():void{
    this.actualPage = 1;
    this.loadMovies()
  }

  previousPage():void{
    if(this.actualPage > 1){
      this.actualPage--;
      this.loadMovies()
    }
  }

  nextPage():void{
    if(this.actualPage < this.maxPage){
      this.actualPage++;
      this.loadMovies();
    }
  }

  lastPage():void{
    this.actualPage = this.maxPage;
    this.loadMovies()
  }

  //Genres

  loadGenres():void{
    this.moviesService.getGenres().subscribe(value => {
      this.genres = value.genres;
      console.log(this.genres)
    }, err => {
      console.log(err)
    })
  }

  filterByGenre(event, genre):void{
    console.log(event.target)

    //Seteamos el filter a true para que la función loadMovies sepa como tiene que buscar
    this.filter = true
    this.filterGenreId = genre.id;

    this.loadMovies();
  }

}

