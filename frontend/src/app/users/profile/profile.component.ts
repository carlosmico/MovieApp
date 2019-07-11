import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UsersService,} from '../users.service';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form:FormGroup;

  constructor(private route: ActivatedRoute, private usersServices: UsersService) { }

  ngOnInit() {
  this.form = new FormGroup({
    username: new FormControl("", { validators: [Validators.minLength(8)] }),
    email: new FormControl("", { validators: [Validators.email, Validators.required] }),
    password: new FormControl("", { validators: [Validators.pattern(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/), Validators.required] })
  })

  }
  handleSubmit() {
    console.log(this.form)
    if (this.form.status === "VALID") {
      console.log(this.form)
      //register es el método definido en el serivicio
      //this.form.value tiene los datos que hemos metido en el formulario
      this.usersServices.register(this.form.value).subscribe(res => {
        localStorage.setItem('authToken', res.token)
        this.usersServices.isAuth = true;
        console.log(res)
      },
        error => console.log(error)) //SUBSCRIBE ES DE OBSVERVABLES. MIRAR OBSERVABLES
    }
  }

}
