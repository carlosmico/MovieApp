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
  showInfo: boolean = false;
  showInfoSimilar: boolean = false;
  showSMIC: boolean = true;//Similar Image Movie Container
  

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

  showMoreInfo (similarMovie): void{
    similarMovie['showInfo']=true
  }

  hideMoreInfo(similarMovie) : void{
    similarMovie['showInfo']=false
  }

  showTheInfo (similarMovie): void{
    similarMovie['showInfoSimilar'] = true;
    similarMovie['showSMIC'] = false;
    console.log(similarMovie['showSMIC'])
  }

  hideTheInfo(similarMovie) : void{
    similarMovie['showInfoSimilar'] = false;
    similarMovie['showSMIC'] = true;
    console.log(similarMovie['showSMIC'])
  }

  }