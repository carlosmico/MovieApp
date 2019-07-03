import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  thrillerList: object[];
  laughList: object[];
  awardList: object[];
  fictionList: object[];
  twistList: object[];
  animeList: object[];
  image_thriller: object;
  
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getList(43).subscribe(value => {
      console.log(value.results[0].poster_path);
      this.thrillerList = value.results;
      this.image_thriller = value.results[0].poster_path;
    })

    this.moviesService.getList(3682).subscribe(value => {
      // console.log(value.results);
      this.laughList = value.results;
    })

    this.moviesService.getList(28).subscribe(value => {
      // console.log(value.results);
      this.awardList = value.results;
    })

    this.moviesService.getList(3945).subscribe(value => {
      // console.log(value.results);
      this.fictionList = value.results;
    })

    this.moviesService.getList(1131).subscribe(value => {
      // console.log(value.results);
      this.twistList = value.results;
    })

    this.moviesService.getList(3321).subscribe(value => {
      // console.log(value.results);
      this.animeList = value.results;
    })
}}
