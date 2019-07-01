import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-top-rate',
  templateUrl: './top-rate.component.html',
  styleUrls: ['./top-rate.component.scss']
})
export class TopRateComponent implements OnInit {
  actualPage:number = 1
  maxPage:number
  movies: object[];

  constructor(private moviesService: MoviesService) { }

   
  ngOnInit() {
    this.loadMovies();
  }

  loadMovies():void{
    this.moviesService.getTopRatedMovies(this.actualPage).subscribe(value=> {
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
