import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUserInfo()
    .subscribe(res => console.log(res))
  }

}
