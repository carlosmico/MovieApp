import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from '../config/moviesApi.js';

const URLS = {
  popularPeople: 'https://api.themoviedb.org/3/person/popular?api_key=',
}

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  constructor(private http: HttpClient) { }
    
    getPopularPeople(page: number): Observable <any> {
      return this.http.get(`${URLS.popularPeople}${API_KEY}&page=${page}`);
    }
   
    getPersonById(id):any{
      return this.http.get(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`);
    }

}
