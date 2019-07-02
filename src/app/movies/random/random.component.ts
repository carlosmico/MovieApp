import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { NgForOf } from '@angular/common';
import { async } from 'q';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
 randomMovie: object;
  max_pages: number;
  page_random: number;
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {

    this.moviesService.getPopularMovies(1).subscribe(value => {
      this.max_pages = value.total_pages;
      this.page_random = Math.floor(Math.random() * this.max_pages);

      this.moviesService.getPopularMovies(this.page_random).subscribe(value => {
        console.log(value);
        this.randomMovie = value.results[Math.floor(Math.random() * value.results.length)]
      }, err => console.log(err)
      )

    }, err => console.log(err)
    )

    console.log(this.page_random);


  }

}