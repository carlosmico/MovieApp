import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies/movies.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  searchResults: object[] = []
  
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {

  }

  search(event:any):void{
    let textIntroduced = event.target.value;

    this.moviesService.searchMovies(textIntroduced).subscribe(value => {
      this.searchResults = [];

      for (let i = 0; i < 10; i++) {
        this.searchResults.push(value.results[i]);
      }

      console.log(this.searchResults)
    }, console.log);
  }

}
