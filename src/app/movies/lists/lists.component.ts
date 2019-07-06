import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { API_KEY } from '../../config/moviesApi.js';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  list_ID: number[] = [43, 3945, 3321];
  lists: object[] = [];
  one_List: object[] = [];
  lists_random: number;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.loadLists();
  }

  loadLists(): void {
    for (let i = 0; i < this.list_ID.length; i++) {
      let id = this.list_ID[i]
      this.moviesService.getList(id).subscribe(value => {
        this.lists.push(value);
        this.lists_random = value.lists;
        // this.lists_random = Math.floor(Math.random() * this.lists.length);

        console.log(this.lists);

      })

    }
  }

  // this.max_pages = value.total_pages;
  // this.page_random = Math.floor(Math.random() * this.max_pages);
  // list_ID: number[] = [43, 3682, 28, 3945, 1131, 3321];


  selectList(id:number):void{
   
  }

}
