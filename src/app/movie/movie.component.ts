import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie:Object
  constructor(private route: ActivatedRoute, private moviesServices: MoviesService) { }

  ngOnInit() {
    console.log('as ')
    this.route.params.subscribe(params => {
      
      this.moviesServices.getMovieById(params.id).subscribe(value =>{ 
      this.movie = value; console.log(this.movie)})
      console.log(this.route.params)
      console.log(this.movie)
      console.log(params.id)
      
    })}}



    
