import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../movies/movies.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(public moviesServices: MoviesService, public route: ActivatedRoute, public personServices: PeopleService, public peopleService : PeopleService) { }
  person: any[];
  people: object[];
  movie: any;
  actualPage: number = 1;

  ngOnInit() {
    this.getPerson();
    this.getPeople();
    this.route.params.subscribe(params => {
      this.moviesServices.getMovieById(params.id).subscribe(value =>{ 
      this.movie = value;
    })
    })
  }

  getPeople(): void {
    this.peopleService.getPopularPeople(this.actualPage).subscribe( result =>{
      console.log(result);
      this.people = result.results;
    }, error =>{
      console.log(error);
    }    )
  }

  getPerson(): void {
  this.route.params.subscribe(params => {
    this.personServices.getPersonById(params.id).subscribe( result =>{
      this.person = result; 
      console.log(this.person);
    }, error =>{
      console.log(error);
    })
  })
  }
}
