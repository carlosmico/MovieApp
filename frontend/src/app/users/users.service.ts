import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

  export class UsersService {

    constructor(private http: HttpClient) { }

      register(user):Observable<any>{
        return this.http.post('http://localhost:4201/users/register', user)
      }
    

  }