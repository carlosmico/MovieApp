import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service'
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {
  listDetail: object[];
  constructor(private route: ActivatedRoute, private movieServices: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieServices.getList(params.id).subscribe(value =>{ 
        this.listDetail = value.results;
        console.log(value.results);
  })}
   

    )}
}
