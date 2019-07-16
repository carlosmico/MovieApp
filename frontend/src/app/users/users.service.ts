import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
  })

  export class UsersService {
    user: any; // creamos el objeto usuario en el servicio, para que todos los componentes tengan acceso a él, subscribiéndose a los observables qeu salgan de él.
    baseUrl = environment.backendUrl;

    constructor(private http: HttpClient) { }

      register(user):Observable<any>{
        
        return this.http.post(this.baseUrl + '/users/register', user)
      }

      getUserInfo():Observable<any>{
        return this.http.get(this.baseUrl + '/users/info',{
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