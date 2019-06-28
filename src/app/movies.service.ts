import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {API_KEY} from './config/moviesApi' 

//API URLs
const URLS = {
  popularMovies: 'https://api.themoviedb.org/3/movie/popular?api_key='
}

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  
  constructor(private http: HttpClient) { }

  //Método que nos devuelve un Observable con las películas más populares
  getPopularMovies():any{
      return this.http.get(`${URLS.popularMovies}${API_KEY}`);
  }
}
