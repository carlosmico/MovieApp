import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;
  emailDuplicado: boolean = false; //Esta variable nos indicará si existe un usuario con el email introducido para informar al usuario

  constructor(private route: ActivatedRoute, private usersServices: UsersService, public router: Router) { }//en mínuscula la instancia, en mayúscula la clase (usersServices, UsersServices)

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl("", { validators: [Validators.minLength(8)] }),
      email: new FormControl("", { validators: [Validators.email, Validators.required] }),
      password: new FormControl("", { validators: [Validators.pattern(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/), Validators.required] })
    });

  }
  handleSubmit() {
    if (this.form.status === "VALID") {
      //register es el método definido en el servicio
      //this.form.value tiene los datos que hemos metido en el formulario
      this.usersServices.register(this.form.value).subscribe(res => {
        console.log(res)
        localStorage.setItem('authToken', res.token); //Acción de Login, guardamos el token recibido al registrar el usuario y así podemos saber quién está logeado.

        this.router.navigate(['/']);//Redirigimos al usuario al home ya que se ha registrado y loggeado correctamente
      },
        error => {
          console.log(error)
          if (error.error.errmsg.includes('email_1 dup key')) {
            this.emailDuplicado = true;
          }
        }) //SUBSCRIBE ES DE OBSVERVABLES. MIRAR OBSERVABLES
    }
  }
}