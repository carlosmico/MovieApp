import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private personServices: PeopleService) { }
  person: any[];

  ngOnInit() {
    this.getPerson();
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
