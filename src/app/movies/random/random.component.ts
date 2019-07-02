import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  random: object;
  total_results: number = 19814 ;
  randomMovie: object;
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {

    this.moviesService.getRandomMovie().subscribe(value => {
      console.log(value);
      this.random = value.results[Math.floor(Math.random()*value.results.length)]
console.log([Math.floor(Math.random()*value.results.length)]);
console.log(this.random);


    }, err => console.log(err)

    )
  }

}
