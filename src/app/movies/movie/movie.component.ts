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
  castNcrew: Object;
  cast: Object[];
  crew: Object[];


  showInfo: boolean = false;
  showInfoSimilar: boolean = false;
  showCharacter: boolean = true;  

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
    
    this.route.params.subscribe(params => {
      this.moviesServices.getCastnCrew(params.id).subscribe(value =>{
        this.castNcrew = value;
        this.cast = value.cast;
        this.crew = value.crew;
        console.log (this.cast)
      })
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
    
  }

  hideTheInfo(similarMovie) : void{
    similarMovie['showInfoSimilar'] = false;
  }

  showTheCharacter(artist) : void{
    artist['showCharacter'] = true;
    console.log(this.showCharacter)
  }

  hiddeTheCharacter(artist) : void{
    artist['showCharacter'] = false;
  }

  }