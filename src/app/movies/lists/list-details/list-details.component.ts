import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service'
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {
  listDetail: object[];
  list: object[] = [];
  actualPage: number = 1
  maxPage: number
  movies: object[];

  constructor(private route: ActivatedRoute, private movieServices: MoviesService) { }

  ngOnInit() {
    this.loadList()
  }
  loadList(): void {

    this.route.params.subscribe(params => {
      this.movieServices.getList(params.id, this.actualPage).subscribe(value => {
        this.listDetail = value.results;
        this.list = value;
        this.maxPage = value.total_pages;

       

        console.log(value);

        console.log(value.results);
      })
    })

  }

  firstPage(): void {
    this.actualPage = 1;
    this.loadList()
  }

  previousPage(): void {
    if (this.actualPage > 1) {
      this.actualPage--;
    }
    this.loadList()
  }

  nextPage(): void {
    if (this.actualPage < this.maxPage) {
      this.actualPage++;
    }
    this.loadList()
  }

  lastPage(): void {
    this.actualPage = this.maxPage;
    this.loadList()
  }

}
