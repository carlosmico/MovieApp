import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MoviesService } from "../movies.service"

const filterOptions = {
  none: "none",
  year: "year",
  genre: "genre",
  yearAndGenre: "yearAndGenre"
}

@Component({
  selector: 'app-discover-movies',
  templateUrl: './discover-movies.component.html',
  styleUrls: ['./discover-movies.component.scss']
})
export class DiscoverMoviesComponent implements OnInit {
  @ViewChild('genreList', { static: false }) genreList: ElementRef;
  movies: Object[] = []
  genres: Object[] = []
  years: string[] = [filterOptions.none]

  //Pagination variables
  actualPage: number = 1
  maxPage: number

  //Filter variables

  //Filter determina el tipo de filtro que ha realizado el usuario
  // none = sin filtros, year = filtro por año, genre = filtro por genero 
  // yearAndGenre = filtro por año y género

  filter: string = filterOptions.none
  filterGenresArray: Object[] = []
  filterYear: string = this.years[0]

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.loadGenres();
    this.loadYears();
    this.loadMovies();
  }

  loadMovies(): void {
    let genresStr;

    //Seteamos el filtro dependiendo de las opciones que hayan seleccionadas
    if (this.filterYear !== filterOptions.none && this.filterGenresArray.length > 0) {
      this.filter = filterOptions.yearAndGenre;
    } else if (this.filterYear !== filterOptions.none) {
      this.filter = filterOptions.year;
    } else if (this.filterGenresArray.length > 0) {
      this.filter = filterOptions.genre;
    }
    else {
      this.filter = filterOptions.none;
    }

    //Dependiendo del valor que tenga el filtro realizaremos una acción u otra
    switch (this.filter) {
      case filterOptions.yearAndGenre:
        genresStr = this.filterGenresArray.map(genre => genre["id"]).reduce((id1, id2) => id1 + "," + id2);

        this.moviesService.getMoviesByYearAndGenre(this.actualPage, this.filterYear ,genresStr).subscribe(value => {
          this.movies = value.results;
          console.log(this.movies)
          this.maxPage = value.total_pages;
        }, console.log);
        break;

      case filterOptions.year:
        this.moviesService.getMoviesByYear(this.actualPage, this.filterYear).subscribe(value => {
          this.movies = value.results;
          this.maxPage = value.total_pages;
        }, console.log);

        console.log(this.filterYear)
        break;

      case filterOptions.genre:
        genresStr = this.filterGenresArray.map(genre => genre["id"]).reduce((id1, id2) => id1 + "," + id2);

        this.moviesService.getMoviesByGenre(this.actualPage, genresStr).subscribe(value => {
          this.movies = value.results;
          this.maxPage = value.total_pages;
        }, console.log);
        break;

      case filterOptions.none:
        this.moviesService.getPopularMovies(this.actualPage).subscribe(value => {
          this.movies = value.results;
          this.maxPage = value.total_pages;
        }, console.log);
        break;
    }
  }


  //PAGINATION

  firstPage(): void {
    this.actualPage = 1;
    this.loadMovies()
  }

  previousPage(): void {
    if (this.actualPage > 1) {
      this.actualPage--;
      this.loadMovies()
    }
  }

  nextPage(): void {
    if (this.actualPage < this.maxPage) {
      this.actualPage++;
      this.loadMovies();
    }
  }

  lastPage(): void {
    this.actualPage = this.maxPage;
    this.loadMovies()
  }

  //FILTERS

  loadYears(): void {
    let actualYear = new Date().getFullYear();

    for (let year = actualYear; year >= 1900; year--) {
      this.years.push(year.toString());
    }
  }

  loadGenres(): void {
    this.moviesService.getGenres().subscribe(value => {
      this.genres = value.genres;
    }, err => {
      console.log(err)
    })
  }

  filterByGenre(genre): void {
    this.addGenre(genre)

    this.loadMovies();
  }

  addGenre(genre): void {
    if (!this.filterGenresArray.includes(genre)) this.filterGenresArray.push(genre);
  }

  removeGenre(event, genreFilter): void {
    setTimeout(() => {
      this.genreList.nativeElement.classList.remove("show")
    }, 1);

    this.filterGenresArray = this.filterGenresArray.filter(genre => genre['id'] != genreFilter.id)

    this.loadMovies();
  }

  filterByYear(year): void {
    this.filterYear = year;

    this.loadMovies();
  }
}
