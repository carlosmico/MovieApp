import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

  export class UsersService {
    user: object; // creamos el objeto usuario en el servicio, para que todos los componentes tengan acceso a él, subscribiéndose a los observables qeu salgan de él.

    constructor(private http: HttpClient) { }

      register(user):Observable<any>{
        this.user = user;
        
        return this.http.post('http://localhost:3001/users/register', user)
      }

      getUserInfo():Observable<any>{
        return this.http.get('http://localhost:3001/users/info',{
          headers : {
            authenticate: localStorage.getItem('authToken')
          }
        })
      }

      // likeMovie(id:string):Observable<object> {
      //   return this.http.get(`http://localhost:3001/users/like/${id}`,{
      //     headers:{
      //       authenticate: localStorage.getItem("authToken")
      //     }
      //   })
      // }

      // dislikeMovie(id:string):Observable<object> {
      //   return this.http.get(`http://localhost:3001/users/dislike/${id}`,{
      //     headers:{
      //       authenticate: localStorage.getItem("authToken")
      //     }
      //   })
      // }
    

  }