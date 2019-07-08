import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.component.html',
  styleUrls: ['./popular-people.component.scss']
})

export class PopularPeopleComponent implements OnInit {
  people: Object[]
  actualPage: number = 1;
  maxPage: number;

  constructor( private peopleService : PeopleService) { }
  

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.peopleService.getPopularPeople(this.actualPage).subscribe( result =>{
      // console.log(result);
      this.people = result.results;
      this.maxPage = result.total_pages;
    }, error =>{
      console.log(error);
    }    )
  }

  firstPage(): void {
    this.actualPage = 1;
    this.getPeople()
  }

  previousPage(): void {
    if (this.actualPage > 1) {
      this.actualPage--;
      this.getPeople()
    }
  }

  nextPage(): void {
    if (this.actualPage < this.maxPage) {
      this.actualPage++;
      this.getPeople();
    }
  }

  lastPage(): void {
    this.actualPage = this.maxPage;
    this.getPeople()
  }

}