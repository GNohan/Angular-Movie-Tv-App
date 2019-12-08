import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from "../Models/movie";
import { Show } from "../Models/show";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieTVServiceService {

  constructor(private http: HttpClient) { }

  //Function that returns movies observable
    getMovies():Observable<Movie[]> {

      return this.http.get<Movie[]>('https://api.themoviedb.org/3/movie/now_playing?api_key=88458f74ca84eae2924fc568bfa76033&language=en-US&page=1')
      //Map the returned json from the request to res 
        .pipe(map((res) => {
          //Then map res into movie objects  
          let results: Movie[];
          
            for (let i = 0; i < res.length; i++) {
              results.push(res[i]);                  
            }

          return results;
        }));
    }
  
    getTvShows(): Observable<Show[]> {

      let results: Show[] = new Array();

      return this.http.get<Show[]>('https://api.themoviedb.org/3/tv/popular?api_key=88458f74ca84eae2924fc568bfa76033&language=en-US&page=1')
        //Map the returned json from the request to res 
        .pipe(map((res) => {
          //Then map res into movie objects  
          let results: Show[];
          
            for (let i = 0; i < res.length; i++) {
              results.push(res[i]);                  
            }
            
          return results;
        }));
    }
}
