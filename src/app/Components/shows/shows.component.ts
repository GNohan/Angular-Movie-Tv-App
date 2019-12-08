import { Component, OnInit } from '@angular/core';
import { MovieTVServiceService } from 'src/app/services/movie-tvservice.service';

import { Show } from "../../Models/show";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  private shows: Observable<Show[]>;

  constructor(private movieTvService : MovieTVServiceService) { }

  ngOnInit() {
    this.shows = this.movieTvService.getTvShows();
  }

}
