import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

  export class UsersService {

    registerUser = async ({username, email, password})=>{
      const res = await this.http.post('http://localhost:4200/register', {
        username, email, password
      }
      )
    }

    constructor(private http: HttpClient) { }

    

  }