import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Movie } from '../../../models/movies';

@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.css']
})
export class DisplayMoviesComponent implements OnInit {
  private moviesRoute = 'http://localhost:3000/movies';
  public movies: Movie[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.http.get<Movie[]>(this.moviesRoute).subscribe(movies => {
      this.movies = movies;
      console.log('Movies', this.movies);
    });
  }

  onMovieDeleted(movieId) {
    let movieIndex = 0;
    for(let movie of this.movies) {
      if(movie.id === movieId) {
        this.movies.splice(movieIndex, 1);
        break;
      }
      movieIndex++;
    }
  }
}