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
  person: any;
  credits: any;

  ngOnInit() {
    this.getPerson();
    this.getKnownForMovies();
  }

  getKnownForMovies(): void {
    this.route.params.subscribe(params => {
      this.peopleService.getPersonKnownForMovies(params.known_for).subscribe( res =>{
      // console.log(res);
      this.credits = res.results;
    }, error =>{
      console.log(error);
    }    )
    })
    
  }

  getPerson(): void {
  this.route.params.subscribe(params => {
    this.personServices.getPersonById(params.id).subscribe( result =>{
      this.person = result; 
      // console.log(this.person);
    }, error =>{
      console.log(error);
    })
  })
  }
}
