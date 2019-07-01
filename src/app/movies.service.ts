import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {API_KEY} from './config/moviesApi' 

//API URLs
const URLS = {
  popularMovies: 'https://api.themoviedb.org/3/movie/popular?api_key=',
  upcomingMovies: 'https://api.themoviedb.org/3/movie/upcoming?api_key=',
  topRatedMovies: 'https://api.themoviedb.org/3/movie/top_rated?api_key='
}

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  
  constructor(private http: HttpClient) { }

  //Método que nos devuelve un Observable con las películas más populares
  getPopularMovies(page:number):any{
    return this.http.get(`${URLS.popularMovies}${API_KEY}&page=${page}`);
  }
  
  getUpcomingMovies(page:number):Observable<any>{
    return this.http.get(`${URLS.upcomingMovies}${API_KEY}&page=${page}`);
  }

  getTopRatedMovies():Observable<any>{
    return this.http.get(`${URLS.topRatedMovies}${API_KEY}`);
  }

  getMovieById(id):any{
    console.log(id)
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
  }

  getVideosById(id):any{
    return this.http.get(`
    https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
  }

  
  
}
