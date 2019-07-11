import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UsersService) { }//inyectamos el UsersServices para que podamos acceder a la variable user, que hemos definido y que contiene todas sus propiedades. Lo hemos usado, por ejemplo en el header para hacer el render condicional del login logout...

  ngOnInit() {
    this.userService.getUserInfo()
      .subscribe(res => {
        console.log(res);
        this.userService.user = res
      }),
      error => console.log('no estás conectado')
  }

}
