import { Component, OnInit, HostListener } from '@angular/core';
import {MoviesService} from '../movies.service';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie:Object
  genres: Object[];
  videos: Object[];
  similarMovies: Object[];
  show: boolean = false;
  constructor(private route: ActivatedRoute, private moviesServices: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      
      this.moviesServices.getMovieById(params.id).subscribe(value =>{ 
      this.movie = value; 
      this.genres = value.genres;
      console.log(this.movie);})
      
    })
    this.route.params.subscribe(params => {
      this.moviesServices.getVideosById(params.id).subscribe(value =>{ 
      this.videos = value.results; 
      console.log(this.videos); })
    })

    this.route.params.subscribe(params => {
      this.moviesServices.getSimilarMovies(params.id).subscribe(value =>{ 
       this.similarMovies = value.results; 
        console.log(this.similarMovies); })
        
        
      })
      
      
      
    }
  showItem (): void{
    this.show = true;
  }
  }