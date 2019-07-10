import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})

export class UpcomingMoviesComponent implements OnInit {
  
  constructor(private moviesService: MoviesService) { }
  actualPage:number = 1
  maxPage:number
  private movies: any[];
  
  ngOnInit() {
    this.loadMovies();
  }

  loadMovies():void{
    this.moviesService.getUpcomingMovies(this.actualPage).subscribe(value=> {
      this.movies = value.results;
      this.maxPage = value.total_pages;

      console.log(this.maxPage)
    }, err=>console.log(err));
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

}
