import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {ActivatedRoute} from '@angular/router'
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;

  constructor(private route: ActivatedRoute, private usersServices: UsersService) { }//en mínuscula la instancia, en mayúscula la clase (usersServices, UsersServices)

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl("", {validators: [Validators.minLength(8)]}),
      email: new FormControl("", {validators: [Validators.email, Validators.required]}),
      password: new FormControl("", {validators: [Validators.minLength(8), Validators.required]} )
    })

  }
  handleSubmit(){
    //register es el método definido en el serivicio
    //this.form.value tiene los datos que hemos metido en el formulario
    console.log('aki llega')
    this.usersServices.register(this.form.value).subscribe(res=>console.log(res))
  }
}
