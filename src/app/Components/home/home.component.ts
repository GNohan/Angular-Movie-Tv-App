import { Component, OnInit } from '@angular/core';
import { MovieTVServiceService } from 'src/app/services/movie-tvservice.service';

import { Movie } from "../../Models/movie";
import { Show } from "../../Models/show";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Will loop through these on form using ngFor
  //So for the home page we have to make sure there is only one movie and show in the array
  shows: Observable<Show[]>;
  movies: Observable<Movie[]>;
  
  //Import the movie service
  constructor( private movieTvService : MovieTVServiceService) { }

  ngOnInit() {
    //Load movies and shows from service
    this.shows = this.movieTvService.getTvShows();
    this.movies = this.movieTvService.getMovies();
  }
}
