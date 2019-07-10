import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {ActivatedRoute} from '@angular/router'
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs'

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
      password: new FormControl("", {validators: [Validators.pattern(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/), Validators.required]} )
    })

  }
  handleSubmit(){
    console.log(this.form)
    if(this.form.status === "VALID"){
      //register es el método definido en el serivicio
      //this.form.value tiene los datos que hemos metido en el formulario
      this.usersServices.register(this.form.value).subscribe(res=>{
        console.log(res)
        localStorage.setItem('authToken', res.token)
        },
         error => console.log(error)) //SUBSCRIBE ES DE OBSVERVABLES. MIRAR OBSERVABLES
    }
  }
}
