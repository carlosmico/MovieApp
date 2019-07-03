import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.component.html',
  styleUrls: ['./popular-people.component.scss']
})

export class PopularPeopleComponent implements OnInit {
  people: Object[];
  constructor( private peopleService : PeopleService) { }
  

  ngOnInit() {
    this.getFilms();
  }

  getFilms(){
    this.peopleService.getPopularPeople().subscribe( result =>{
      console.log(result)
      this.people=result.results;
    }, error =>{ 
      console.log(error);
    }
  )
  }
}
