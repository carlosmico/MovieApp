import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { API_KEY } from '../config/moviesApi'

//API URLs
const URLS = {
  searchMovies: 'https://api.themoviedb.org/3/search/movie?api_key=',
  genres : 'https://api.themoviedb.org/3/genre/movie/list?api_key=',
  popularMovies: 'https://api.themoviedb.org/3/movie/popular?api_key=',
  upcomingMovies: 'https://api.themoviedb.org/3/movie/upcoming?api_key=',
  topRatedMovies: 'https://api.themoviedb.org/3/movie/top_rated?api_key=',
  latestMovies: 'https://api.themoviedb.org/3/movie/latest?api_key=',
  certifications: 'https://api.themoviedb.org/3/certification/movie/list?api_key=',
  trendingDay: 'https://api.themoviedb.org/3/trending/movie/day?api_key=',
  trendingWeek: 'https://api.themoviedb.org/3/trending/movie/week?api_key=',
}

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }

  searchMovies(textIntroduced:string):any{
    return this.http.get(`${URLS.searchMovies}${API_KEY}&query=${textIntroduced}`);
  }

  getCertifications():any{
    return this.http.get(`${URLS.certifications}${API_KEY}`);
  }
  
  getTrendingMoviesByDay():Observable<any>{
    return this.http.get(`${URLS.trendingDay}${API_KEY}`);
  }

  getTrendingMoviesByWeek():Observable<any>{
    return this.http.get(`${URLS.trendingWeek}${API_KEY}`);
  }

  getGenres():any{
    return this.http.get(`${URLS.genres}${API_KEY}`);
  }

  getMoviesByGenre(page:number, genres:string):any{
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}&with_genres=${genres}`)
  }

  getMoviesByYear(page:number, year:string):any{
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}&year=${year}`)
  }

  getMoviesByYearAndGenre(page:number, year:string, genres:string):any{
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}&year=${year}&with_genres=${genres}`)
  }

  //Método que nos devuelve un Observable con las películas más populares
  getPopularMovies(page: number): any {
    return this.http.get(`${URLS.popularMovies}${API_KEY}&page=${page}`);
  }

  getUpcomingMovies(page: number): Observable<any> {
    return this.http.get(`${URLS.upcomingMovies}${API_KEY}&page=${page}`);
  }

  getTopRatedMovies(page: number): Observable<any> {
    return this.http.get(`${URLS.topRatedMovies}${API_KEY}&page=${page}`);
  }

  getMovieById(id):any{
    
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
  }

  getVideosById(id): any {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
  }

  getSimilarMovies(id):any{
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`);
  }

  getCastnCrew(id): any{
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`);

  }
  
  getlatestMovies(): Observable<any> {
    return this.http.get(`${URLS.latestMovies}${API_KEY}`);
  }

  getList(id): Observable<any>{
    
      return this.http.get(`https://api.themoviedb.org/4/list/${id}?page=1&api_key=${API_KEY}`)}
    // else if (id === 3682){
    //   return this.http.get(`https://api.themoviedb.org/4/list/3682?page=1&api_key=${API_KEY}`)}
    // else if (id === 28){
    //   return this.http.get(`https://api.themoviedb.org/4/list/28?page=1&api_key=${API_KEY}`)}
    // else if (id === 3945) {
    //   return this.http.get(`https://api.themoviedb.org/4/list/3945?page=1&api_key=${API_KEY}`)}
    // else if (id === 1131) {
    //   return this.http.get(`https://api.themoviedb.org/4/list/1131?page=1&api_key=${API_KEY}`)}
    // else if (id === 3321) {
    //   return this.http.get(`https://api.themoviedb.org/4/list/3321?page=1&api_key=${API_KEY}`)}
  // }

}
