import { Component, OnInit } from '@angular/core';
import { MovieTVServiceService } from 'src/app/services/movie-tvservice.service';

import { Movie } from "../../Models/movie";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  private movies: Observable<Movie[]>;

  constructor(private movieTvService : MovieTVServiceService) { }

  ngOnInit() {
    this.movies = this.movieTvService.getMovies();
  }

}
